let query = { active: true, currentWindow: true };
let lawTermsJson
fetch('/lawTerms.json')
  .then(res => res.json())
  .then(json => {
    lawTermsJson = json
  })

let originalMessage

chrome.tabs.query(query, gotTabs);
function gotTabs(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {txt: "helplaw"}, function (response) {
    if (!response) {
      document.getElementById("phonetic").innerHTML = "HelpLaw";
        document.getElementById("example").innerHTML = "Defining and translating judicial words";
    } else if (response.sent_msg === "NO_TEXT") {
      document.getElementById("error").innerHTML = "Please highlight a word, then click the extension";
    } else {
      originalMessage = response.sent_msg
      dictionaryApi(response.sent_msg.replace(/\s/g, "").replace(/[^a-zA-Z ]/g, ""));
    }
  });
}

let wordef, word, phonetic,pos,defin, example, sourceurl, index = 0, indlimit;

async function lawTermsJsonLookup(query){
  word = query
  jsonQuery = word.toLowerCase()
  defin = lawTermsJson
  let wordSplit = word.split(" ")
  let searchEnd;
  for(let term in wordSplit){
    searchEnd += term
    searchEnd += "+"
  }
  sourceurl = "https://www.google.com/search?q=" + searchEnd 

  document.getElementById(
    "word"
  ).innerHTML = `${word} <a href=${sourceurl} class="searchanchor" target="_blank"><img class="searchsvg" title="Google Search" src = "./images/search-icon.png" alt="google"/><a>`;
  document.getElementById("definition").innerHTML = defin ? defin : "Unable to get definition of item.";
  document.getElementById("example").innerHTML = example ? `Example: ${example}` : "";
}

async function dictionaryApi(query) {
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`;
  let response = await fetch(url);
  wordef = await response.json();
  if (wordef && !wordef.title) {
    indlimit = wordef[0].meanings.length;
    word = wordef[0].word;
    phonetic = wordef[0].phonetic ? wordef[0].phonetic : "";
    sourceurl = `https://en.wiktionary.org/wiki/${word}`;
    index = 0;

    setValues();

    if (indlimit > 1) {
      document
        .getElementById("navigatecontainer")
        .classList.remove("hidenavigator");
    }
  } else if (wordef.title) {
    document.getElementById("error").innerHTML = "⚠  " + wordef.title;
  }
}

document.getElementById("translateBtn").addEventListener("click",handleTranslate);
function handleTranslate(){
  let selectedOption = document.getElementById('selectLanguage').value
  let baseUrl = 'https://translate.google.com/?sl=en&tl='
  baseUrl += selectedOption
  baseUrl += '&text='
  baseUrl += originalMessage
  baseUrl += '&op=translate'
  window.open(baseUrl, "_blank")
}

const synth = window.speechSynthesis
const utterThis = new SpeechSynthesisUtterance(inputTxt.value)

document.getElementById('ttsButton').addEventListener('click',handleTts)
function handleTts(){
  synth.speak(utterThis)
}


document.getElementById("prev").addEventListener("click", handlePrevious);
document.getElementById("next").addEventListener("click", handleNext);

function handlePrevious() {
  index = index - 1;
  if (index < 0) index = indlimit - 1;
  setValues();
}

function handleNext() {
  index = index + 1;
  if (index >= indlimit) index = 0;
  setValues();
}

function setValues() {
  pos = wordef[0].meanings[index].partOfSpeech;
  defin = wordef[0].meanings[index].definitions[0].definition;
  example = wordef[0].meanings[index].definitions[0].example
    ? wordef[0].meanings[index].definitions[0].example
    : null;

  document.getElementById(
    "word"
  ).innerHTML = `${word} <a href=${sourceurl} class="searchanchor" target="_blank"><img class="searchsvg" title="read more" src = "./images/wiki-icon.svg.png" alt="read more"/><a>`;
  document.getElementById("phonetic").innerHTML = `${phonetic}  (${pos})`;
  document.getElementById("definition").innerHTML = defin;
  if (example) {
    document.getElementById("example").innerHTML = `Example: ${example}`;
  } else {
    document.getElementById("example").innerHTML = "";
  }
}
