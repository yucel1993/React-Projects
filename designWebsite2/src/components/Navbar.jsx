import {BsPerson} from "react-icons/bs"
import {BiPerson} from "react-icons/bi"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20'>
        <h1>
            BEACHES.
        </h1>
        <ul>
            <li>HOME</li>
            <li>DESTINATIONS</li>
            <li>TRAVEL</li>
            <li>VIEW</li>
            <li>BOOK</li>
        </ul>
        <div>
            <BiSearch/>
            <BsPerson/>
        </div>
    </div>
  )
}

export default Navbar