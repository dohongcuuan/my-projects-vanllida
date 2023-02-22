
import axios from "axios"
import { useEffect, useState } from "../../../lib"


const admincontact = () => {
    const [contact,setcontact]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/contact").then(({data})=> setcontact(data))
    },[]);
    
  return `
  <div class="container pt-5">
  <h1> Tên</h1>
  <table class="table table-bordered">
          <thead>
              <tr>
                  <th>#</th>
                  
                 <th>Hình ảnh</th>                
                  <th></th>
              </tr>
          </thead>
          <tbody>
          ${
            contact.map((contac,index)=>{
                return`
                <tr>
          <td>${index+1}</td>
         
          <td><img src="${contac.img}" alt="" style=" width: 140px;"></td>
          <td><a href="/admin/contact/${contac.id}/edit">Sửa</a></td>          
         
            </tr>
                `
            }).join("")
          }
          
</tbody>
</table>
</div>
  `
}

export default admincontact