// import productsData from "@/data/product.json";

// let products = [...productsData]; 

// export default function handler(req, res) {
//   if (req.method === "GET") {
//     return res.status(200).json(products);
//   }

//   if (req.method === "POST") {
//     const { name, description, price, image } = req.body;

//     if (!name || !description || !price) {
//       return res.status(400).json({ message: "Name, description, price আবশ্যক" });
//     }

//     const newProduct = {
//       id: products.length + 1, 
//       name,
//       description,
//       price,
//       image: image || "https://via.placeholder.com/300x200?text=New+Product",
//     };

//     products.push(newProduct);
//     return res.status(201).json({ message: "Product added", product: newProduct });
//   }

//   res.setHeader("Allow", ["GET", "POST"]);
//   return res.status(405).end(`Method ${req.method} Not Allowed`);
// }

import productsData from "@/data/product.json";
import { NextResponse } from "next/server";

let products = [...productsData];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request) {
  const body = await request.json();
  const { name, description, price, image } = body;

  if (!name || !description || !price) {
    return NextResponse.json(
      { message: "Name, description, price আবশ্যক" },
      { status: 400 }
    );
  }

  const newProduct = {
    id: products.length + 1,
    name,
    description,
    price,
    image: image || "https://via.placeholder.com/300x200?text=New+Product",
  };

  products.push(newProduct);

  return NextResponse.json(
    { message: "Product added", product: newProduct },
    { status: 201 }
  );
}
