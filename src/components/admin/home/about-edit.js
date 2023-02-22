
import axios from "axios";
import { router, useEffect, useState } from "../../../lib";



const AdminAboutEdit = ({ id }) => {
  

    const [About, setAbout] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/home/${id}`)
            .then((response) => response.json())
            .then((data) => setAbout(data));
    }, []);
    useEffect(() => {
        const form = document.getElementById("form-edit");
        const AboutName = document.getElementById("About-name");
        const Abouttitle = document.getElementById("About-title");
        const Aboutimages= document.getElementById("images");
        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            const urls = await uploadfile(Aboutimages.files)
            console.log(urls);
            const formData = {
                id,
                name: AboutName.value,
                title: Abouttitle.value,
                
                img: urls,
            };

            fetch("http://localhost:3000/home/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/admin/about"));
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
            <input type="text" class="form-control" id="About-name" value="${About.name}" />
        </div>
        <div class="form-group">
            <label for="" class="form-label">Công Nghệ</label>
            <input type="text" class="form-control" id="About-title" value="${About.title}" />
        </div>
       <div class="form-group">
            <label for="" class="form-label">Hình ảnh</label>
            <input type="file" multiple class="form-control" id="images" />
        </div>
        
        <button class="btn btn-primary">Cập Nhật</button>
    </form>
    </div>`;
};

export default AdminAboutEdit;
