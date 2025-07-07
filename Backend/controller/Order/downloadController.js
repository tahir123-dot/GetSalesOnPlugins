// controller/Order/downloadController.js

import Order from "../../model/order.js";
import Product from "../../model/product.js";

export const getDownloadableProducts = async (req, res) => {
  try {
    const userId = req.user._id;

    const deliveredOrders = await Order.find({
      user: userId,
      orderStatus: "Delivered",
    }).populate({
      path: "products.product",
      select: "name downloadUrl",
    });

    const downloadableProducts = [];

    for (const order of deliveredOrders) {
      for (const item of order.products) {
        const product = item.product;

        if (product?.downloadUrl) {
          downloadableProducts.push({
            _id: product._id,
            name: product.name,
            downloadUrl: product.downloadUrl,
          });
        }
      }
    }

    res.status(200).json({ downloads: downloadableProducts });
  } catch (err) {
    console.error("Download Error:", err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
