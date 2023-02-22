
import axios from "axios"
import { useEffect, useState } from "../../../lib"


const adminAbout = () => {
    const [About,setAbout]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/home").then(({data})=> setAbout(data))
    },[]);
    
  return `
  <div class="container pt-5">
  <h1> Tên</h1>
  <table class="table table-bordered">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>title</th>
                 <th>Hình ảnh</th>                
                  <th></th>
              </tr>
          </thead>
          <tbody>
          ${
            About.map((About,index)=>{
                return`
                <tr>
          <td>${index+1}</td>
          <td>${About.name}</td>
          <td>${About.title}</td>
          <td><img src="${About.img}" alt="" style=" width: 140px;"></td>
          <td><a href="/admin/about/${About.id}/edit">Sửa</a></td>          
         
            </tr>
                `
            }).join("")
          }
          
</tbody>
</table>
</div>
  `
}

export default adminAbout