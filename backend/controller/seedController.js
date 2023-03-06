import data from '../data.js';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';

export const seed = async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts, createdUsers });
  };


