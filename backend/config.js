
//-----------------------------------------------
import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT || 4000,
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://reactShop:reactShop@reactshop.f33ot.mongodb.net/reactshop?retryWrites=true&w=majority',//'mongodb://localhost:27017/reactshop',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
    accessKeyId: process.env.accessKeyId || 'accessKeyId',
    secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
};