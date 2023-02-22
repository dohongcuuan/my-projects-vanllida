import img from '../../public/img/avt.jpg';


const About = (aboutme) => {
  return ` <div>
  <section class="about" id="about">
    <h2 class="heading"><i class="fas fa-user-alt"></i> About <span>Me</span></h2>
    
    <div class="row">
    ${aboutme.map((aboutme)=>{
      return`
      <div class="image">
        <img draggable="false" class="tilt" src="${aboutme.img}" alt="">
    </div>
    <div class="content">
        <h3>I'm ${aboutme.name}</h3>
        <span class="tag">${aboutme.title}</span>
        
        <p> ${aboutme.introduce}.</p>
        
        <div class="box-container">
            <div class="box">
              <p><span> age: </span> ${aboutme.age}</p>
              <p><span> phone : </span> ${aboutme.phone}</p>
            </div>
            <div class="box">
              <p><span> email : </span>${aboutme.email} </p>
              <p><span> place : </span> ${aboutme.place} </p>
            </div>
        </div>
        
        <div class="resumebtn">
            <a href="#" class="btn"><span>Resume</span>
                <i class="fas fa-chevron-right"></i>
            </a>
        </div>

    </div>
     
    
      `
       }).join("")}
    
    </div>
</section>
</div>`
}

export default About