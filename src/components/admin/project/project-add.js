import axios from "axios";
import { router, useEffect } from "../../../lib";


const adminprojectadd = () => {
    useEffect(() => {

        const formAdd = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        const projectTec = document.getElementById("project-title");
        const projectGithub = document.getElementById("project-github");
        const projectImg = document.getElementById("project-images");
        formAdd.addEventListener("submit", (e) => {
            e.preventDefault();

            
            const formData = {
                name: projectName.value,
                title: projectTec.value,
                github: projectGithub.value,
               

                img: urls,

            }

            axios.post("http://localhost:3000/projects", formData).then(() => {
                router.navigate("admin/projects")
            })
        })
    });
    const uploadfile = async (files) => {
        if(files) {
        const CLOUD_NAME = "dfengnp59";
        const PRESET_NAME =  "ztmq7zmf";
        const FOLDER_NAME = "ECMA";
        const urls = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
        const formData = new FormData() ; 
    
         formData.append("upload_preset", PRESET_NAME) ;
         formData.append("folder", FOLDER_NAME);
    
         for(const file of files) {
            formData.append("file", file );
            const response = await axios
                .post(api, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            });
             urls.push(response.data.secure_url);
            //  return urls;
         }
         return urls;
        }
    };
    
    return `
  <div class="container pt-5">
  <form action="" id="form-add">
      <div class="form-group">
          <label for="" class="form-label">Tên Dự án</label>
          <input type="text" class="form-control" id="project-name" />
      </div>
      <div class="form-group">
          <label for="" class="form-label">Công Nghệ</label>
          <input type="text" class="form-control" id="project-title" />
      </div>
      <div class="form-group">
      <label for="" class="form-label">Link Dự Án</label>
      <input type="text" class="form-control" id="project-github" />
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