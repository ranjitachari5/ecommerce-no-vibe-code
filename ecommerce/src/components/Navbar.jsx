import {
  Menu,
  Search,
  User,
  CircleUserRound,
  Heart,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
const links = ["New", "Men", "Women", "Streetwear", "Sale"];
const icons = [
  <Search />,
  <User />,
  <CircleUserRound />,
  <Heart />,
  <ShoppingCart />,
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    
      <nav className="flex font-serif">
        <div className="flex items-center">
          <Menu className="block md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          <p className=" text-3xl text-left p-5 md:text-7xl ">Urban Echo</p>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div>
            <ul className="hidden md:flex gap-3 text-3xl md:pl-20  md:gap-5">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="/"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className=" flex gap-3 pl-20  md:gap-5 ">
            {icons.map((icon) => (
              <a 
                href="/"
                className="cursor-pointer hover:text-blue-500 transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
          </div>
      </nav>
    </>
  );
}
export default Navbar;
