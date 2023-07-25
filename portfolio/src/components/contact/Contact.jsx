import "./Contact.scss";

function Contact() {
  return (
    <div>
      <h1 className="contact-h1">Contact Me...</h1>
      <div className="contact">
        
        <div><i class="fa-solid fa-envelope"></i>
        <p>wednesday@nevermoreacademy.edu</p></div>
        <div><i class="fa-solid fa-phone"></i>
        <p>+40 (571) 360-1234</p></div>
        <div>
        <i class="fa-solid fa-location-dot"></i>
        <p>Strada Zamorei 1, Bușteni 105500, Romania</p>
        </div>
      </div>
      <div className="contact-icons">
        <div >
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-github"></i>
        </div>
        <h2>&copy; Copyright {new Date().getFullYear()}</h2>
      </div>
    </div>
  )
}

export default Contact