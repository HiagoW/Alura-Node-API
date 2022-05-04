import mongoose from "mongoose";

const connectionURL = process.env.ALURA_NODE_DB_URL;

mongoose.connect(`${connectionURL}`);

let db = mongoose.connection;

export default db;
