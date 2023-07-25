import "./Home.scss";

function Home() {
  return (
    <div>
      <div className="box">
        <p>Hi! My Name is</p>
        <h1>
          Wednesday <span>Addams</span>{" "}
        </h1>
        <div className="line"></div>
        <h2>Full Stack Web Developer</h2>
      </div>
      <footer>
        <div>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-github"></i>
        </div>
        <h2>&copy; Copyright {new Date().getFullYear()}</h2>
      </footer>
    </div>
  );
}

export default Home;
