import React from "react";
import ProductGrid from "../components/ProductGrid";
import { products } from "../productDetail";
function Men({item}){
    const Mproducts=products.filter((item)=>item.category.includes("men"));
    return(
        <>
  <ProductGrid items={Mproducts}/>
   </>
    );
}
export default Men;