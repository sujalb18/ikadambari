// import React, { useEffect, useState } from 'react';

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('/api/products')
//     .then(response => response.json())
//     .then(data => setProducts(data));
// }, []);

// return (
//   <div>
//     <h1>Products</h1>
//     <ul>
//       {products.map(product => (
//         <li key={product._id}>
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <p>${product.price}</p>
//           <img src={product.image} alt={product.name} />
//         </li>
//       ))}
//     </ul>
//   </div>
// );
// }

// export default Products;

import React from 'react'


export default function Shop() {
  return (<div>
    <div id="loadingDiv">
      <div class="loader"></div>
    </div>
    <div id="cursor"></div>

    <div class="container">
      <nav>
        <div class="row">
          <div class="col-6">
            <div class="navbar-left">
              <h1>
                <a href="#">Mate<span>Store</span></a>
              </h1>
              <p class="navbar-p">Our Best Shopping Center</p>
            </div>
          </div>
          <div class="col-6">
            <div class="navbar-right">
              <a href="javascript:void(0);">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.IaoQZRzMTYotymEDBMXk1wHaHa&pid=Api&P=0"
                  alt="shopping cart"
                  class="shopping-cart-img"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section id="product-section">
        <div class="filters"></div>
        <div class="products">
          <div class="product-list row"></div>
        </div>
      </section>
    </div>
</div>
  )
}
