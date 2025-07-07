import User from "../../model/user.js";
import Order from "../../model/order.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "username email");

    const userData = await Promise.all(
      users.map(async (user) => {
        const orders = await Order.find({ user: user._id });

        const totalSpent = orders.reduce(
          (sum, order) => sum + order.totalAmount,
          0
        );

        return {
          _id: user._id,
          name: user.username,
          email: user.email,
          totalOrders: orders.length,
          totalSpent,
        };
      })
    );

    const totalUsers = users.length;

    res.status(200).json({ users: userData, totalUsers });
  } catch (error) {
    console.error("Get Users Error:", error.message);
    res
      .status(500)
      .json({ message: "Failed to fetch users", error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete user error:", error.message);
    res
      .status(500)
      .json({ message: "Failed to delete user", error: error.message });
  }
};
