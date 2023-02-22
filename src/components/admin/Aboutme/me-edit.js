
import axios from "axios";
import { router, useEffect, useState } from "../../../lib";



const AdminMeEdit = ({ id }) => {
  

    const [Aboutme,setAboutme] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/About/${id}`)
            .then((response) => response.json())
            .then((data) => setAboutme(data));
    }, []);
    useEffect(() => {
        const form = document.getElementById("form-edit");
        const AboutmeName = document.getElementById("Aboutme-name");
        const AboutmeTec = document.getElementById("Aboutme-title");
        const Aboutmeintroduce = document.getElementById("Aboutme-introduce")
        const Aboutmeage = document.getElementById("Aboutme-age")
        const Aboutmephone = document.getElementById("Aboutme-phone")
        const Aboutmeemail = document.getElementById("Aboutme-email")
        const Aboutmeplace = document.getElementById("Aboutme-place")
        const AboutmeImg = document.getElementById("Aboutme-images")
        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            const urls = await uploadfile(AboutmeImg.files)
            console.log(urls);
            const formData = {
                id,
                name: AboutmeName.value,
                title:AboutmeTec.value,
                introduce:Aboutmeintroduce.value,
                age:Aboutmeage.value,
                phone:Aboutmephone.value,
                email:Aboutmeemail.value,
                place:Aboutmeplace.value,
                img: urls,
            };

            fetch("http://localhost:3000/About/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/admin/aboutme"));
        });
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
    
    return ` <div class="container pt-5">
    <form action="" id="form-edit">
        <div class="form-group">
            <label for="" class="form-label">Tên Dự án</label>
            <input type="text" class="form-control" id="Aboutme-name" value="${Aboutme.name}" />
        </div>
        <div class="form-group">
            <label for="" class="form-label">Ngôn Ngữ</label>
            <input type="text" class="form-control" id="Aboutme-title" value="${Aboutme.title}" />
        </div>
        <div class="form-group">
      <label for="" class="form-label">Link Dự Án</label>
      <input type="text" class="form-control" id="Aboutme-introduce" value="${Aboutme.introduce}" />
        </div>
        <div class="form-group">
      <label for="" class="form-label">Link Dự Án</label>
      <input type="text" class="form-control" id="Aboutme-age" value="${Aboutme.age}" />
        </div>
        <div class="form-group">
      <label for="" class="form-label">Link Dự Án</label>
      <input type="text" class="form-control" id="Aboutme-phone" value="${Aboutme.phone}" />
        </div>
        <div class="form-group">
      <label for="" class="form-label">Link Dự Án</label>
      <input type="text" class="form-control" id="Aboutme-email" value="${Aboutme.email}" />
        </div>
        <div class="form-group">
      <label for="" class="form-label">Link Dự Án</label>
      <input type="text" class="form-control" id="Aboutme-place" value="${Aboutme.place}" />
        </div>
       
        
        <div class="form-group">
            <label for="" class="form-label">Hình ảnh</label>
            <input type="file" multiple class="form-control" id="Aboutme-images" value="${Aboutme.img}" />
        </div>
        
        <button class="btn btn-primary">Thêm dự án</button>
    </form>
    </div>`;
};

export default AdminMeEdit;
