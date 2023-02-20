import axios from "axios";
import { useEffect } from "../../lib";


const adminprojectadd = () => {
    useEffect(() => {
        const formAdd = document.getElementById("form-add")
        const projectName = document.getElementById("project-name");
        const projectTec = document.getElementById("project-technology")
        const projectImg = document.getElementById("project-images")
        formAdd.addEventListener("submit",(e)=>{
                e.preventDefault()
                const formData = {
                    name: projectName.value,
                    technology: projectTec.value,
                    img: ""

                }
                axios.post("http://localhost:3000/projects",formData).then(()=>{
                    console.log("add")
                })
        })
    })
  return `
  <div class="container pt-5">
  <form action="" id="form-add">
      <div class="form-group">
          <label for="" class="form-label">Tên Dự án</label>
          <input type="text" class="form-control" id="project-name" />
      </div>
      <div class="form-group">
          <label for="" class="form-label">Công Nghệ</label>
          <input type="text" class="form-control" id="project-technology" />
      </div>
      <div class="form-group">
          <label for="" class="form-label">Hình ảnh</label>
          <input type="file" multiple class="form-control" id="project-images" />
      </div>
      
      <button class="btn btn-primary">Thêm dự án</button>
  </form>
  </div>`;
  
}

export default adminprojectadd;