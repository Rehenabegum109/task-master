import { dbConnect, collections } from "@/lib/dbconnect";

export async function POST(req) {
  try {
    const data = await req.json();
    const collection = await dbConnect(collections.PRODUCTS);

    const result = await collection.insertOne({
      ...data,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ insertedId: result.insertedId }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}
