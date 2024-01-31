import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({
      success: true,
      message: "User Found",
      data: user,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "No user found" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");

    res.status(200).json({
      success: true,
      message: "User Found",
      data: users,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const { password, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Profile info is getting",
      data: { ...rest },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    // const user = await User.findById(req.userId);

    const bookings = await Booking.find({ userId: req.userId });

    const doctorsIds = bookings.map((booking) => booking.doctorId);

    const doctors = await Doctor.find({ _id: { $in: doctorsIds } }).select(
      "-password"
    );

    res.status(200).json({
      success: true,
      message: "Appointments found",
      data: { bookings, doctors },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
