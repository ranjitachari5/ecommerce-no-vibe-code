import shirt from "./assets/shirt.jpg";
import tshirt from "./assets/tshirt.jpg"
import wshirt from "./assets/womanshirt.jpg"
import wpant from "./assets/pants_women.jpg"
import sw from "./assets/streetwear.jpg"
export const products = [
  {   
    id: 1,
    name: "Shirt",
    price: 800,
    img: shirt,
    category: ["men"],
    discount:50,
  },
  {   
    id: 2,
    name: "T-Shirt",
    price: 300,
    img: tshirt,
    category: ["men", "women"],
    discount:10,
  },
  {   
    id: 3,
    name: "Woman-Shirt",
    price: 600,
    img: wshirt,
    category: ["women"],
    discount:0,
  },
  {   
    id: 4,
    name: "Woman-pant",
    price: 700,
    img: wpant,
    category: ["women"],
    discount:0,
  },
    {   
    id: 5,
    name: "Street-Wear",
    price: 900,
    img: sw,
    category: ["men","streetwear","women"],
    discount:0,
  },
  
];