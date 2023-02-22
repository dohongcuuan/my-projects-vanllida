
import axios from "axios"
import About from "../components/About"
import ConTact from "../components/ConTact"
import footer from "../components/footer"
import header from "../components/header"
import projects from "../components/projects"
import skill from "../components/skill"
import { useEffect, useState } from "../lib"

const Homepage = () => {
  const [project , setProject]= useState([])
  const[homes , setAbout]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/projects")
    .then(({data})=>setProject(data))
    axios.get("http://localhost:3000/home")
    .then(({data})=>setAbout(data))
        
  },[])
    
  return ` <div>
    ${header(homes)}
    ${About()}
    ${skill()}
    ${projects(project)}
    ${ConTact()}
    ${footer()}
  </div>`
}
export default Homepage