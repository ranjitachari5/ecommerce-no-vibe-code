import {products} from "../productDetail";
import Product from "./Product";
function ProductGrid({items=[]}) {
  return (

       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6"> 
      {items.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
}
export default ProductGrid;