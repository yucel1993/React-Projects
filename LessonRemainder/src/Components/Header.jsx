import img from "../img/Clarusway.png";


function Header() {
  return (
    < >
      <nav className="bg-warning">
      <img src={img} className="w-25 p-3" alt="" />
      </nav>
    <h2 className="text-center heading">Lesson Remainder</h2>
    </>
   
  )
}

export default Header