import img from '../../public/img/avt.jpg';


const About = () => {
  return ` <div>
  <section class="about" id="about">
    <h2 class="heading"><i class="fas fa-user-alt"></i> About <span>Me</span></h2>
    
    <div class="row">

    <div class="image">
        <img draggable="false" class="tilt" src="${img}" alt="">
    </div>
    <div class="content">
        <h3>I'm Quân</h3>
        <span class="tag">Front End Developer</span>
        
        <p> Lorem ipsum dolor sit amet, consectetur 
        adipisicing elit. Fugit nisi repudiandae corporis inventore officiis reiciendis soluta suscipit quas. Adipisci, repudiandae. 
        Repellat laudantium numquam voluptate quo dolorum temporibus nisi ducimus explicabo.</p>
        
        <div class="box-container">
            <div class="box">
              <p><span> age: </span> 19</p>
              <p><span> phone : </span> +84338976647</p>
            </div>
            <div class="box">
              <p><span> email : </span> dohongquan459@gmail.com</p>
              <p><span> place : </span> Cao Đẳng  FPT Polytechnic </p>
            </div>
        </div>
        
        <div class="resumebtn">
            <a href="#" class="btn"><span>Resume</span>
                <i class="fas fa-chevron-right"></i>
            </a>
        </div>

    </div>
    </div>
</section>
</div>`
}

export default About