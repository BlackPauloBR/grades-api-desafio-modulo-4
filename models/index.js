import mongoose from 'mongoose';
const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.gradesModel = null;
export { db };
