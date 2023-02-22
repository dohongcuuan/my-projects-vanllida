
const header = (homes) => {
  console.log(homes)
  return `<div>
  <header>
  <a href="/" class="logo"><i class="fab fa-node-js"></i> Q</a>

  <div id="menu" class="fas fa-bars"></div>
  <nav class="navbar">
      <ul>
      <li><a class="active" href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#education">Work</a></li>
        
      <li><a href="#contact">Contact</a></li>
      </ul>
  </nav>
</header>




<section class="home" id="home">
<div id="particles-js"></div>
 ${homes.map((item)=>{
return`

<div class="content">
<h2>Hi There,<br/> I'm ${item.name} <span>Sable</span></h2>
<p>i am into <span class="typing-text">${item.title}</span></p>
<a href="#about" class="btn"><span>About Me</span>
<i class="fas fa-arrow-circle-down"></i>
</a>
<div class="socials">
  <ul class="social-icons">
  
    <li><a class="github" aria-label="GitHub" href="https://github.com" target="_blank"><i class="fab fa-github"></i></a></li>
   
    <li><a class="telegram" aria-label="Telegram" href="https://t.me" target="_blank"><i class="fab fa-telegram-plane"></i></a></li>
    <li><a class="instagram" aria-label="Instagram" href="https://www.instagram.com"><i class="fab fa-instagram" target="_blank"></i></a></li>
    <li><a class="dev" aria-label="Dev" href="https://dev.to" target="_blank"><i class="fab fa-dev"></i></a></li>
  </ul>
</div>
</div>
<div class="image">
<img draggable="false" class="tilt" src="${item.img}" alt="">
</div>

`
 }).join("")}

</section></div>`
  
  
}

export default header