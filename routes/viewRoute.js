const express = require("express");
const router = express.Router();
const viewController = require("./../controllers/viewController");
const authController = require("./../controllers/authController");
const bookingController = require("./../controllers/bookingController");

router.get(
  "/",
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewController.getOverview
);
router.get("/signup", viewController.getSignupForm);
router.get("/tour/:slug", authController.isLoggedIn, viewController.getTour);
router.get("/login", authController.isLoggedIn, viewController.getLoginForm);
router.get("/me", authController.protect, viewController.getAccount);
router.get("/myTours", authController.protect, viewController.getMyTours);

//We will not use this
// router.post('/submit-user-data' , authController.protect ,viewController.updateUserData);
module.exports = router;
