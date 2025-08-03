import Address from "../../model/address.js";

export const saveOrUpdateAddress = async (req, res) => {
  try {
    const { firstName, lastName, email, country, city } = req.body;
    const userId = req.user._id;

    let existingAddress = await Address.findOne({ user: userId });

    if (existingAddress) {
      existingAddress.firstName = firstName;
      existingAddress.lastName = lastName;
      existingAddress.email = email;
      existingAddress.country = country;
      existingAddress.city = city;
      await existingAddress.save();
      return res
        .status(200)
        .json({ message: "Address updated", address: existingAddress });
    }

    const newAddress = await Address.create({
      user: userId,
      firstName,
      lastName,
      email,
      country,
      city,
    });

    res.status(201).json({ message: "Address saved", address: newAddress });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getUserAddress = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(userId);
    const address = await Address.findOne({ user: userId });

    if (!address) {
      return res.status(404).json({ message: "No address found" });
    }

    res.status(200).json({ address });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
