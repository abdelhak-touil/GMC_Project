const express = require("express");
const router = express.Router();
const {
  authUser,
  registerUser,
  getUsers,
  getUserProfile,
  deleteUser,
  updateUser,
  updateUserProfile,
  getUserById,
} = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware");

router.route("/login").post(authUser);
router.route("/").post(registerUser);
router.route("/").get(protect, admin, getUsers);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .put(protect, admin, updateUser)
  .get(protect, admin, getUserById);

module.exports = router;
