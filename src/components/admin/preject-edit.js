import { useEffect, useState } from "../../lib";


const AdminProjectEditPage = ({ id }) => {
  

    const [project, setProject] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, []);
    useEffect(() => {
        const form = document.getElementById("form-edit");
        const projectName = document.getElementById("project-name");
        const projectTec = document.getElementById("project-title");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = {
                id,
                name: projectName.value,
                    title:projectTec.value,
                    
                    img: ""
            };

            fetch("http://localhost:3000/projects/" + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            }).then(() => router.navigate("/admin/projects"));
        });
    });
    return ` <div class="container pt-5">
    <form action="" id="form-edit">
        <div class="form-group">
            <label for="" class="form-label">Tên Dự án</label>
            <input type="text" class="form-control" id="project-name" />
        </div>
        <div class="form-group">
            <label for="" class="form-label">Công Nghệ</label>
            <input type="text" class="form-control" id="project-title" />
        </div>
        <div class="form-group">
            <label for="" class="form-label">Hình ảnh</label>
            <input type="file" multiple class="form-control" id="project-images" />
        </div>
        
        <button class="btn btn-primary">Thêm dự án</button>
    </form>
    </div>`;
};

export default AdminProjectEditPage;
