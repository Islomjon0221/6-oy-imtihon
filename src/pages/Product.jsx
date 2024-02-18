import "../App.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Product() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://strapi-store-server.onrender.com/api/products")
    .then(res => {
      setData(res.data.data);
      console.log(res.data.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className="Product">
    <div className="containers">
      <div className="wrapper-product">
      {
          data.map((res, i) => {
            let x = res.attributes.price
              const y = x.toString().split('').slice(0, -2).join('')
              const newNum = Number(y)
              let url = `https://react-vite-comfy-store-v2.netlify.app/products/${res.id}`
            return(
              <Link key={i} to = {url}   className="card">
                <img width="320" height='192' src={res.attributes.image} alt="" />
                <h3 className="card-h3">{res.attributes.title}</h3>
              <p className="card-p">${newNum}.99</p>
          </Link>
            )
          })
        }
      </div>
    </div>
    </div>
  )
}

export default Product