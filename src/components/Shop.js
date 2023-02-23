import React from 'react'
// import axios from 'axios'
// import BASE_URL from '../BASE_URL'
//import ProductCard from '../components/products/ProductCard'
// import TableItem from './TableItem'
import image from './images/we.jpeg'
import p1 from './images/Products/product1.jpeg'
import p2 from './images/Products/product2.jpeg'
import p3 from './images/Products/product3.jpeg'
import p4 from './images/Products/product4.jpeg'


const Shop = () =>
{

  return <>
    <div class="box">
    <div class="card">
      <div class="containers">
        <img class="card-img-top" src={p2} alt="Card image cap" />
        <div class="card-body">
          <p>Godna art small notebooks-Set of 4</p>
          <a href="/cart" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="containers">
        <img class="card-img-top" src={p1} alt="Card image cap" />
        <div class="card-body">
          <p>Godna art small notebooks-Set of 4</p>
          <a href="/cart" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        <div class="containers">
          <img class="card-img-top" src={p3} alt="Card image cap" />
          <div class="card-body">
            <p>Godna art small notebooks-Set of 4</p>
            <a href="/cart" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        
    </div>
    <div class="card">
      <div class="containers">
        <img class="card-img-top" src={p4} alt="Card image cap" />
        <div class="card-body">
          <p>Godna art small notebooks-Set of 4</p>
          <a href="/cart" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="containers">
        <img class="card-img-top" src={image} alt="Card image cap" />
        <div class="card-body">
          <p>Godna art small notebooks-Set of 4</p>
          <a href="/cart" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        <div class="containers">
          <img class="card-img-top" src={image} alt="Card image cap" />
          <div class="card-body">
            <p>Godna art small notebooks-Set of 4</p>
            <a href="/cart" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        
    </div>
    </div>
  </>
}
export default Shop;