

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
