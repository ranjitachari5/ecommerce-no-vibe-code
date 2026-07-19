
import {
  Search,
  User,
  CircleUserRound,
  Heart,
  ShoppingCart,
} from "lucide-react";
function Navbar() {
  return (
    <>
      <nav>
        <div className="p-3 flex items-center md:flex">
          <p className="font-serif p-4 text-5xl ml-6 mr-auto sm:flex">Urban Echo</p>
          <ul className="sm-flex font-serif text-2xl gap-5 flex ml-60  space-x-4">
            <a href="/" className=" cursor-pointer hover:text-blue-600 transition-all duration-200">
              <li>New</li>
            </a>
            <a href="/" className="cursor-pointer hover:text-blue-600 transition-all duration-200">
              <li>Men</li>
            </a>
            <a href="/" className="cursor-pointer hover:text-blue-600 transition-all duration-200">
              <li>Woman</li>
            </a>
            <a href="/" className="cursor-pointer hover:text-blue-600  transition-all duration-200">
              <li>Streetwear</li>
            </a>
            <a href="/" className="cursor-pointer hover:text-blue-600  transition-all duration-200">
              <li>Sale</li>
            </a>
          </ul>

          <div className="ml-auto flex items-center gap-5 text-2xl mr-6">
            <a href="/" className="cursor-pointer hover:text-blue-500 transition-colors duration-200"><Search/></a>
            <a href="/" className="cursor-pointer hover:text-blue-500 transition-colors duration-200"><User /></a>
            <a href="/" className="cursor-pointer hover:text-blue-500 transition-colors duration-200"><CircleUserRound /></a>
            <a href="/" className="cursor-pointer hover:text-blue-500 transition-colors duration-200"><Heart /></a>
           <a href="/" className="cursor-pointer hover:text-blue-500 transition-colors duration-200"><ShoppingCart /></a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
