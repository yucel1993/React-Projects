// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Header({ setSelectedCategory }) {
//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     const getAll = () => {
//       axios("https://fakestoreapi.com/products/categories").then((res) =>
//         setProduct(res.data)
//       );
//     };
//     getAll();
//   }, []);

//   console.log(product);

//   return (
//     <div>
//       <Link  to={`/productcard/all`} className="btn btn-danger" onClick={() => setSelectedCategory("All")}>
//         All
//       </Link>
//       {product.map((item, i) => (
//         <Link
//           key={i}
//           to={`/productcard/${item}`}
//           className="btn btn-danger"
//           onClick={() => setSelectedCategory(item)}
//         >
//           {item}
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default Header;



// !  under there is useparams section above useState,lifting state

import { Link } from "react-router-dom";

function Header() {
  const productCategories = ["All", "men's clothing", "women's clothing", "electronics", "jewelery"];

  return (
    <div>
     
      {productCategories.map((category, i) => (
        <Link key={i} to={`/productcard/${category}`} className="btn btn-danger">
          {category}
        </Link>
      ))}
    </div>
  );
}

export default Header;
