import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store";
import { toggleFavourite } from "./productSlice";

const Products: FC = () => {
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();
  const favourite = useSelector((state: RootState) => state.favourite.value);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://reqres.in/api/unknown")
        .then((response) => response.json())
        .then((data) => setProductList(data.data || []));
    };

    fetchData();
  }, []);

  return (
    <section className="products">
      <div className="container">
        <ul className="product-list">
          {productList.map((item: any) => (
            <li className="product-item" key={item.id}>
              <img
                className="product-image"
                src="https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg"
                alt="product"
              />
              <h4 className="product-name">{item.name}</h4>
              <p className="product-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto, delectus ut! Esse ut laudantium sequi sunt provident
                id blanditiis quisquam.
              </p>
              <button className="btn-action">Add to card</button>
              <i
                className={`product-icon fas fa-heart ${
                  favourite.includes(item.id) ? "active" : ""
                }`.trim()}
                onClick={() => dispatch(toggleFavourite(item.id))}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
