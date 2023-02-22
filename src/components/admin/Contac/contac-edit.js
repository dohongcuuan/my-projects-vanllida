import axios from "axios";
import { useEffect, useState } from "../../../lib";




const AdmincontacEdit = ({ id }) => {
  

    const [contact, setcontact] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/contact/${id}`)
            .then((response) => response.json())
            .then((data) => setAboutme(data));
            
    }, []);
    useEffect(() => {     
        const contactImg = document.getElementById("contac-images")
        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            const urls = await uploadfile(contactImg.files)
            console.log(urls);
            const formData = {
                id,               
                img: urls,
            };

            fetch("http://localhost:3000/contact/" + id, {
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
            <input type="text" class="form-control" id="contac-images" value="${contact.img}" />
        </div>      
        <button class="btn btn-primary">Thêm Ảnh</button>
    </form>
    </div>`;
};

export default AdmincontacEdit;
