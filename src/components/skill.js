import img from '../../public/img/bootstrap.png';
import img2 from '../../public/img/css3.png';
import img3 from '../../public/img/html-5--v1.png';
import img4 from '../../public/img/javascript--v1.png';
import img5 from '../../public/img/php-logo.png';
import img6 from '../../public/img/Tailwind_CSS_Logo.svg.png';


const skill = () => {
  return `
    <div>
    <section class="skills" id="skills">

    <h2 class="heading"><i class="fas fa-laptop-code"></i>  <span>Skills</span></h2>

    <div class="container">
          <div class="row" id="skillsContainer">
          <div class="bar">
          <div class="info">
            <img src="${img}"/>
            <span>Bootstrap</span>
          </div>
        </div>
        <div class="bar">
              <div class="info">
                <img src="${img2}"/>
                <span>CSS3</span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <img src="${img3}"/>
                <span>HTML5</span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <img src="${img4}"/>
                <span>JavaScript</span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <img src="${img5}"/>
                <span>PHP</span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <img src="${img6}"/>
                <span>TailWindCSS</span>
              </div>
            </div>
            
        

      </div>
</div>
</section>
    </div>
  `
}

export default skill