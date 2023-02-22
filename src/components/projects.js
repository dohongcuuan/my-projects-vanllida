
import img from '../../public/img/duan.jpg';
const projects = (projects) => {
    
  return `
  <div>
  <section class="education" id="education">

  <h1 class="heading"><i class=""></i>  <span>Work</span></h1>

    <p class="qoute">.</p>

    <div class="box-container">
    ${projects.map((item)=>{
        return`

        <div class="box">
        <div class="image">
        <img draggable="false" src="${item.img}" alt="" >
        </div>
        <div class="content">
        <a href=""><h3>${item.name}</h3></a> 
        <p>${item.title}</p>
        <a href=""><h4>${item.github}</h4></a>
        </div>
        </div>

        `
    }
        
        ).join("")}
  
  

  

   

</div>
</section></div>`
   
  
}

export default projects