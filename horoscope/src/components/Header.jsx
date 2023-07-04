import Headerstyle from "../sass/Header.module.scss"

function Header({logo}) {
  return (
    <>
    <div className={Headerstyle.container}>
      <div className={Headerstyle.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={Headerstyle.headings}>
        <ul>
          <li>HOROSCOPE</li>
          <li>DAILY</li>
          <li>TAROT</li>
          <li>ARTICLE</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Header