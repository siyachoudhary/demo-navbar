import './App.css';
import Navbar from "./components/navbar";
import MyButton from "./components/MyButton";

function App() {

    const navLinkList=[
        ["aboutBtn", "#aboutMe", "ABOUT ME"],
        ["projectsBtn", "#projects", "PROJECTS"],
        ["awardsBtn", "#awards", "AWARDS"]
    ]

  return (
    <div className="App">
        <Navbar name={"JOHN DOE"} image={"profile.png"} navLinkList ={navLinkList}></Navbar>
        <div className={"content"}>
            <div id={"aboutMe"}>
                <div className={"about"}>
                    <h1>ABOUT ME HERE</h1>
                    <MyButton btnText={"test"}></MyButton>
                </div>
            </div>
            <div id={"projects"}>
                <div className={"projects"}>
                    <h1>PROJECTS HERE</h1>
                </div>
            </div>
            <div id={"awards"}>
                <div className={"awards"}>
                    <h1>AWARDS HERE</h1>
                </div>
            </div>
        {/*    anytime a new category div is created, add an id (newDivId), create a new link in Navbar.js, and in the href={} add #newDivId  */}
        </div>
    </div>
  );
}

export default App;
