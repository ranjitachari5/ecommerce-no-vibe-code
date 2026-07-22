import React from "react";
import { products } from "../productDetail";
import ProductGrid from "../components/ProductGrid";
function Sale(){
    const sale=products.filter((item)=>item.discount>0);
    return(
    <ProductGrid items={sale}/>
    );
}
export default Sale;