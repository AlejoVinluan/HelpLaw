window.addEventListener("mouseup", handleSelection);

var highlightedText;

function handleSelection() {
  highlightedText = window.getSelection().toString();
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    let msg;
    if (highlightedText.length <= 0){
        msg = highlightedText = "NO_TEXT"
    } else {
        msg = highlightedText
    }
  sendResponse({ sent_msg: msg });
}
