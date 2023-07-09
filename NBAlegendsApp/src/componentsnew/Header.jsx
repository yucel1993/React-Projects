
import "./sass/Header.scss";
import image from "../assets/nba-logo.png"

const Header = () => {

  return (
    <div>


        <div className="container text-center  header">
            
            <img src={image} alt="" />

            <h1>NBA Legends</h1>

            
            
            
        </div>


    </div>
  )
}
export default Header