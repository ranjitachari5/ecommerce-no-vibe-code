import React from "react";
import { products } from "../productDetail";
import ProductGrid from "../components/ProductGrid";
function Women(){
    const wproducts=products.filter((item)=>item.category.includes("women"));
    return(
        <>
        <ProductGrid items={wproducts}/>
    </> 
    );
}
export default Women;