import Navbar from "./Components/Navbar/Navbar";
import ContainerOne from "./Components/ContainerOne/ContainerOne";
import ContainerTwo from "./Components/ContainerTwo/ContainerTwo";
import ContainerThree from "./Components/ContainerThree/ContainerThree";
import ContainerFour from "./Components/ContainerFour/ContainerFour";
function App() {
  return (
    <div>
      <Navbar/>
      <ContainerOne/>
      <ContainerTwo/>
      <ContainerThree/>
      <ContainerFour/>
      <div className="divv"></div>
    </div>
  );
}

export default App;
