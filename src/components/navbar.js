import "./navbar.css"
import Scrollspy from 'react-scrollspy'

//if any more nav links are added, give them a unique id and add the id to this list
const linklist=[
    "aboutBtn",
    "projectsBtn",
    "awardsBtn"
]

//if any more page sections are added, give them a unique id and add the id to this list
const pageLinks=[
    "aboutMe",
    "projects",
    "awards"
]

const Navbar = (props) => {

    //Choose selected link
    function select(selectedId) {
        for (let i = 0; i < linklist.length; i++) {
            document.getElementById(linklist[i]).classList.remove("selected")
            if (linklist[i] === selectedId) {
                document.getElementById(linklist[i]).classList.add("selected")
            }
        }
    }

    return(
        <nav className="navbar">
            <div className={"name"}>
                <a href={"#aboutMe"}><img src={props.image} alt={"Logo"} className={"logoImg"} onClick={() => select('aboutBtn')}/></a>
                <a href={"#aboutMe"} onClick={() => select('aboutBtn')}><h1 className={"yourName"}>{props.name}</h1></a>
            </div>
            <div className={"links"}>
                {/*scrollspy is from https://github.com/makotot/react-scrollspy/blob/master/src/js/nav.js*/}
                <Scrollspy
                    items={ ['aboutMe', 'projects', 'awards'] }
                    onUpdate={
                        (el) => {
                            for (let i = 0; i < linklist.length; i++) {
                                document.getElementById(linklist[i]).classList.remove("selected")
                                if(pageLinks[i]===el.id){
                                    document.getElementById(linklist[i]).classList.add("selected")
                                }
                            }
                        }
                    }
                >
                <a href={"#aboutMe"} id={"aboutBtn"} className={"selected"} onClick={() => select('aboutBtn')}>ABOUT ME</a>
                <a href={"#projects"} id={"projectsBtn"} onClick={() => select('projectsBtn')}>PROJECTS</a>
                <a href={"#awards"} id={"awardsBtn"} onClick={() => select('awardsBtn')}>AWARDS</a>
                </Scrollspy>
            {/*    add more nav links respectively or change existing ones. If you change the id make sure the id is also changed in array linkList[].
            Also, link the href to the section div with the respective id and also add it to the array pageLinks[] */}
            </div>
        </nav>
    )
}

export default Navbar;