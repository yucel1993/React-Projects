import"./About.scss";

function About() {
  return (
    <div>
      <div className="about">
        <h2>BIO</h2>
        <p>Wednesday Addams is a fictional character from the Addams Family multimedia franchise created by American cartoonist Charles Addams. She is typically portrayed as a morbid and emotionally reserved child that is fascinated by the macabre, often identified by her pale skin and black pigtails. Wednesday has been portrayed by several actresses in various films and television series, including Lisa Loring in the television series The Addams Family (1964), Christina Ricci in the feature films The Addams Family (1991) and Addams Family Values (1993), and Jenna Ortega in the streaming television series Wednesday (2022).</p>
      </div>
      <main>
        <div>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-github"></i>
        </div>
        <h2>&copy; Copyright {new Date().getFullYear()}</h2>
      </main>
      <div className="footer-about">
        <div className="card">
          <h1>2020 - 2021</h1>
          <h1>CLARUSWAY</h1>
          <p>Instructor & Full Stack Developer</p>
          <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci.</h4>
        </div>
        <div className="card">
          <h1>2019 - 2020</h1>
          <h1>Google</h1>
          <p>Front End Developer</p>
          <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci..</h4>
        </div>
        <div className="card">
          <h1>2019 - 2020</h1>
          <h1>Google</h1>
          <p>Front End Developer</p>
          <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat vero dolores eum ut, culpa ullam quis quasi exercitationem in adipisci..</h4>
        </div>
      </div>
    </div>
  )
}

export default About