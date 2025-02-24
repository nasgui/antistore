//TODO
//1. ADD TRANSITIONS
//2. ADD ACTION TO ADD TO CART BUTTON

import { useState } from "react";
import formatMoney from "../lib/formatMoney";
import { useRouter } from "next/router";
import { FeaturedProductStyle } from "./styles/FeaturedProductStyle";
import DeleteProduct from "./DeleteProduct";
import EditProductButton from "./EditProductButton";
import AddToCart from "./AddToCart";

const FeaturedProduct = ({ product }) => {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);

  return (
    <FeaturedProductStyle>
      <div
        className="div-bg"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <div
          className="div-main"
          onClick={() => router.push(`/product/${product?.id}`)}
        >
          <div>
            {showButton ? (
              <DeleteProduct id={product?.id}>Delete</DeleteProduct>
            ) : (
              ""
            )}
            {showButton ? (
              <EditProductButton id={product?.id}>Edit</EditProductButton>
            ) : (
              ""
            )}
            <img
              src={product?.photo?.image?.publicUrlTransformed}
              alt={product?.name}
            />
          </div>
          <h3>
            <span>{product?.name}</span>
          </h3>
          <span>{product?.description}</span>
          <h3>
            <span>{formatMoney(product?.price)}</span>
          </h3>
          {showButton ? <AddToCart id={product?.id} /> : ""}
        </div>
      </div>
    </FeaturedProductStyle>
  );
};

export default FeaturedProduct;
