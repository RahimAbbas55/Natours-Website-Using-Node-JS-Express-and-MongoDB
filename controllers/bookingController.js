const stripe = require("stripe")(process.env.STRIP_SECRET_KEY);
const catchAsync = require("./../utils/catchAsync");
const Tour = require("./../models/tourModel");
const booking = require('./../models/bookingModel');
const factory = require('./handlerFactory');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get currently booked tour
  const tour = await Tour.findById(req.params.tourId);
  console.log(req.params.tourId, tour);

  // 2) Get checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: 'payment',
    success_url: `${req.protocol}://${req.get("host")}/?tour=${req.params.tourId}&user=${req.user.id}&price=${tour.price}`,
    cancel_url: `${req.protocol}://${req.get("host")}/tour/${tour.slug}`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourId,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${tour.name} Tour`,
            description: tour.summary,
            images: [`https://www.natours.dev/img/tours/${tour.imageCover}`],
          },
          unit_amount: tour.price * 100, // Amount should be in cents
        },
        quantity: 1,
      },
    ],
  });

  // 3) Create session as response
  res.status(200).json({
    status: "success",
    session,
  });
});


exports.createBookingCheckout = catchAsync ( async (req , res ,next) => {
  //This is only temporary as anyone can make bookings without paying 
  const { tour , user , price } = req.query;
  if( !tour && !user && !price){
    return next();
  }
  await booking.create({
    tour , user, price
  });
  res.redirect(req.originalUrl.split('?')[0]);
});

exports.createBooking = factory.createOne(booking);
exports.getBooking = factory.getOne(booking);
exports.getAllBooking = factory.getAll(booking);
exports.updateBooking = factory.updateOne(booking);
exports.deleteBooking = factory.deleteOne(booking);