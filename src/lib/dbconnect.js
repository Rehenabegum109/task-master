
// const { MongoClient, ServerApiVersion } = require("mongodb");

// const uri = process.env.MONGO_URI;
// const dbName = process.env.DB_NAME;

// const collections = {
//   PRODUCTS: "products",
// };

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// async function dbConnect(cname) {
  
//   if (!client.isConnected?.()) {
//     await client.connect();
//   }
//   return client.db(dbName).collection(cname);
// }

// module.exports = { dbConnect, collections };

const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
console.log("Mongo URI:", uri);


const collections = {
  PRODUCTS: "products",
};


let client;
let clientPromise;

async function dbConnect(cname) {
  if (!client) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    clientPromise = client.connect();
  }

  await clientPromise;
  return client.db(dbName).collection(cname);
}

module.exports = { dbConnect, collections };
