import img from "../img/Clarusway.png";


function Header() {
  return (
    <header >
      <nav className="bg-warning">
      <img src={img} className="w-25 p-3" alt="" />
      </nav>
    <h2 className="text-center">Lesson Remainder</h2>
    </header>
   
  )
}

export default Header