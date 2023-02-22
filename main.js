import"bootstrap/dist/css/bootstrap.min.css"
import"bootstrap/dist/js/bootstrap.js"


const app = document.querySelector("#app");





import { render, router } from "./src/lib";
import Homepage from "./src/page/HomePage";
import  ConTact  from "./src/components/ConTact";
import About from "./src/components/About";
import skill from "./src/components/skill";
import footer from "./src/components/footer";
import Adminprojects from "./src/components/admin/project";
import Adminprojectsadd from "./src/components/admin/project-add";
import AdminProjectEditPage from "./src/components/admin/preject-edit";
import adminAbout from "./src/components/admin/home/about";
import AdminAboutEdit from "./src/components/admin/home/about-edit";





router.on("/", () => render(Homepage, app));
router.on("admin/about", ()=>render(adminAbout,app));
router.on("/admin/about/:id/edit",({data})=>render(()=>AdminAboutEdit(data),app));
router.on("admin/projects" ,()=> render(Adminprojects,app));
router.on("/admin/projects/add",()=> render(Adminprojectsadd,app) )

router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminProjectEditPage(data), app));


router.resolve();











































































$(document).ready(function () {

    // Đoạn code xử lý sự kiện khi click vào menu
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Đoạn code xử lý sự kiện khi scroll trang
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // Thêm hoặc xóa class 'active' của nút cuộn lên đầu trang
        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // Scroll spy - Đoạn code xử lý để hightlight thanh điều hướng khi scroll đến phần tương ứng
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // Smooth scrolling - Đoạn code xử lý chuyển đến phần tương ứng của trang web khi click vào nút trong thanh điều hướng
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

});

// Hàm showSkills để hiển thị các kỹ năng
function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}
