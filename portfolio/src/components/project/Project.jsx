import"./Project.scss";
import {imageData} from "../../helper/imageData.jsx";

function Project() {
  return (
    <div className="project">
      <h2 className="title">My Projects</h2>
      <main>
        <div>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-github"></i>
        </div>
        <h2>&copy; Copyright {new Date().getFullYear()}</h2>
      </main>

      <div className="project-down">
  {
    imageData.map((img, i) => (
      // Render images in rows
      (i % 3 === 0) && (
        <div className="image-row" key={`row_${i}`}>
          {imageData.slice(i, i + 3).map((img, j) => (
            <img key={i + j} width="30%" src={img.image} alt="" />
          ))}
        </div>
      )
    ))
  }
</div>

    </div>
  )
}

export default Project