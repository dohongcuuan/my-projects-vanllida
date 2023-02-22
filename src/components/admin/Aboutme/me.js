
import axios from "axios"
import { useEffect, useState } from "../../../lib"


const adminMe = () => {
    const [Aboutme,setAboutme]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/About").then(({data})=> setAboutme(data))
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
                  <th>introduce</th>
                  <th>age</th>
                  <th>phone</th>
                  <th>email</th>
                  <th>place</th>
                 <th>Hình ảnh</th>                
                  <th></th>
              </tr>
          </thead>
          <tbody>
          ${
            Aboutme.map((Aboutme,index)=>{
                return`
                <tr>
          <td>${index+1}</td>
          <td>${Aboutme.name}</td>
          <td>${Aboutme.title}</td>
          <td>${Aboutme.introduce}</td>
          <td>${Aboutme.age}</td>
          <td>${Aboutme.phone}</td>
          <td>${Aboutme.email}</th>
          <td>${Aboutme.place}</td>
          <td><img src="${Aboutme.img}" alt="" style=" width: 140px;"></td>
          <td><a href="/admin/aboutme/${Aboutme.id}/edit">Sửa</a></td>          
         
            </tr>
                `
            }).join("")
          }
          
</tbody>
</table>
</div>
  `
}

export default adminMe