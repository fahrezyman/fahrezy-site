const heroText = document.getElementById("hero-content");

const contentData = {
  home: `
    <h1>Hi,<br>I'm <span class="highlight">Fahrezy</span><br>a Software Engineer.</h1>
    <a class="btn">I speak 🇮🇩 🇬🇧</a>
  `,
  about: `
     
  <h1>About Me</h1>
    <p>
    I'm Ilham Fahrezy, a Software Engineer passionate about backend systems and machine learning. My current thesis involves classifying wheat kernels using SVM with GLCM and color features.
    </p> <br>
    <p>I made this website to challenge myself again how to build with Vanilla HTML, CSS, and Javascript.

  `,
  contact: `
    <h1>Contact</h1>
    <p class="contact-info">Email me at: <br> 📬 <a href="mailto:ilhamfahrezyxz@gmail.com">ilhamfahrezyxz@gmail.com</a></p>
  `
};


document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const section = link.dataset.section;
    heroText.classList.remove("fade-in");
    heroText.innerHTML = contentData[section] || "";
    void heroText.offsetWidth; 
    heroText.classList.add("fade-in");
  });
});
