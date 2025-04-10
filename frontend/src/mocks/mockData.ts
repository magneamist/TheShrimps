import { Item } from '../services/api';

export const mockItems: Item[] = [
  {
    id: 1,
    name: "Nike Sneakers",
    description: "State-of-the-art sports sneakers.",
    size: "M",
    price: 120,
    tag: "NEW",
    favorite: "NO",
    seller_id: 1,
    seller_name: "John Smith",
    image: "nike.jpg"
  },
  {
    id: 2,
    name: "Adidas T-shirt",
    description: "Cotton t-shirt with the Adidas logo.",
    size: "L",
    price: 45,
    tag: "SALE",
    favorite: "YES",
    seller_id: 2,
    seller_name: "Emma Johnson",
    image: "adidas.jpg"
  },
  {
    id: 3,
    name: "Puma Jacket",
    description: "Waterproof sports jacket, perfect for rainy days.",
    size: "XL",
    price: 89,
    tag: "POPULAR",
    favorite: "NO",
    seller_id: 3,
    seller_name: "Michael Brown",
    image: "puma.jpg"
  },
  {
    id: 4,
    name: "Reebok Running Shoes",
    description: "Lightweight running shoes with extra cushioning.",
    size: "US 10",
    price: 110,
    tag: "NEW",
    favorite: "YES",
    seller_id: 1, 
    seller_name: "John Smith",
    image: "reebok.jpg"
  },
  {
    id: 5,
    name: "Levi's Jeans",
    description: "Classic straight-fit denim jeans.",
    size: "32",
    price: 75,
    tag: "BASIC",
    favorite: "NO",
    seller_id: 4,
    seller_name: "Sarah Davis",
    image: "levis.jpg"
  },
  {
    id: 6,
    name: "Under Armour Sweatshirt",
    description: "Warm athletic sweatshirt with moisture-wicking technology.",
    size: "S",
    price: 65,
    tag: "SALE",
    favorite: "NO",
    seller_id: 5,
    seller_name: "Alex Wilson",
    image: "underarmour.jpg"
  },
];