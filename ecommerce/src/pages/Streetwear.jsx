import React from "react";
import { products } from "../productDetail";
import ProductGrid from "../components/ProductGrid";
function Streetwear(){
    const streetwear=products.filter((item)=>item.category.includes("streetwear"));
    return(
    <>
    <ProductGrid items={streetwear}/>
    </>
    );
}
export default Streetwear;