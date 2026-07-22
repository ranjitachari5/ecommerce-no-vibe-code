function Product({ item }) {
  return (
    <>
    <div className="flex flex-col items-center cursor-pointer group relative overflow-hidden shadow-xl rounded-b-lg  w-full ">
      <img 
        src={item.img} 
        alt={item.name} 
        className="w-96 h-72 object-contain transition-transform duration-300 group-hover:scale-105 overflow-hidden md:h-72 ml-1 mb-3   " 
      />
      <div className="grow ">
        <h2 className="text-xl font-bold font-sans">{item.name}</h2>
        <p className="text-lg text-gray-700 mt-1">${item.price}</p>
      </div>

      <button className="mt-4 w-3/4 bg-black text-white py-2 mb-4 rounded font-semibold hover:bg-gray-800">
        Add to Cart
      </button>


    </div>
  </>
  );
}
export default Product;