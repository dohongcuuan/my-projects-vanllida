import axios from "axios"
import { useEffect, useState } from "../../lib"

const adminproject = () => {
    const [projects,setProjects]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/projects").then(({data})=> setProjects(data))
    },[])
    useEffect(()=>{
        const  btns = document.querySelectorAll(".btn")
        for(const btn of btns) {
            btn.addEventListener("click",()=>{
                const id = btn.dataset.id
                const newprojects = projects.filter((project)=> project.id != id)
                setProjects(newprojects)
                axios.delete("http://localhost:3000/projects/"+id,newprojects) 
            })
        }
    })
  return `
  <div class="container pt-5">
  <h1>Quản lý dự án</h1>
  <table class="table table-bordered">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Tên dự án</th>
                  <th>Công nghệ</th>
                  <th>Link Github</th>
                  <th>Hình ảnh</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
          ${
            projects.map((project,index)=>{
                return`
                <tr>
          <td>${index+1}</td>
          <td>${project.name}</td>
          <td>${project.title}</td>
          <td>${project.github}</td>
          <td><img src = "${project.img}" style="
          width: 270px;"></td>
          <td><button data-name="#" data-id="${project.id}" class="btn btn-danger btn-remove">Xóa</button>
        <a href="/admin/projects/${project.id}/edit">Sửa</a>
    </td>    </tr>
                `
            }).join("")
          }
          
</tbody>
</table>
</div>
  `
}

export default adminproject