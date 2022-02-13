const { MongoClient } = require("mongodb");

async function main() {
  const uri = process.env.MONGO_URL;
  const client = new MongoClient(uri);
  try {
    return await client.connect();
  } catch (e) {
    console.error(e);
  }
}

module.exports = main;
