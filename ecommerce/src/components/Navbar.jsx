import {
  Menu,
  Search,
  User,
  CircleUserRound,
  Heart,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";//react router dom  
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // links array with routes
  const links = [
  { name: "Home", path: "/" },
  { name: "Men", path: "/men" },
  { name: "Women", path: "/women" },
  { name: "Streetwear", path: "/streetwear" },
  { name: "Sale", path: "/sale" },
];
const icons=[
  {icon:<User />,path:"/User"},
  {icon:<CircleUserRound />,path:"/circleuser"},
  {icon:<Heart />,path:"/wishlist"},
  {icon:<ShoppingCart />,path:"/shoppingcart"},
]
  return (
    <>
      <nav className="flex font-serif">
        <div className="flex items-center">
          <Menu
            className="block md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          <p className=" text-5xl text-left p-3 md:text-6xl md:text-center  "style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)"}}>Urban Echo</p>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div>
            <ul className="hidden md:flex gap-3 text-3xl md:pl-20 md:gap-8">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className=" flex gap-3 pl-20 md:gap-5 ">
            <div className="flex md:ml-3">
              <input
                type="search"
                placeholder="Search..."
                className="h-7 w-full hidden  md:flex md:rounded md:border md:border-input md:bg-transparent px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Search className="cursor-pointer hover:text-blue-500 transition-colors md:h-6 md:w-20 " />
              </div>
              <div className="flex gap-3 mr-5">
            {icons.map((icon,index) => (
              <Link
              key={index}
              to={icon.path}
              className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
              >
                {icon.icon}
              </Link>
            ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
