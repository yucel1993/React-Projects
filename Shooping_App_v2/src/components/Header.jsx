

import {  NavLink } from "react-router-dom";

function Header() {
  const productCategories = ["All", "men's clothing", "women's clothing", "electronics", "jewelery"];

  return (
    <div className="header">
     
      {productCategories.map((category, i) => (
        <NavLink   key={i} to={`/productcard/${category}`} className="dashboard-selector  btn btn-danger mx-1 mt-4  px-1">
          {category}
        </NavLink>
      ))} 
    </div>
  );
}

export default Header;
