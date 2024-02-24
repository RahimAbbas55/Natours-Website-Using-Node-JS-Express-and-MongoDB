const catchAsync = require('./../utils/catchAsync');
const  AppError = require('./../utils/appError');
const User = require('./../models/userModel');
const Tour = require('./../models/tourModel');
const booking = require('./../models/bookingModel');

exports.getOverview = catchAsync(async(req, res , next) => {
    //1)Get Tour data
    const tours = await Tour.find();

    //2)Build template
    //3)Render the template
    res.status(200).render("overview", {
        title: "All Tours",
        tours: tours
    });
});

exports.getTour = catchAsync(async(req, res, next) => {
  //1)Get data for the requested tour
  const tour = await Tour.findOne({slug: req.params.slug}).populate({
    path: 'reviews',
    fields: 'review rating user'
  });
  if(!tour){
    return next(new AppError('There is no tour with that name!' , 404))
  }
  //2)Build template
  //3)Render template using the data from 1)
  res.status(200).render("tour", {
    title: `${tour.name} Tour`,
    tour
  });
});

exports.getLoginForm = catchAsync(async (req , res , next) => {
  res.status(200).render('login' , {
    title: 'Welcome to Login Screen!'
  })
});

exports.getSignupForm = catchAsync(async (req , res , next) => {
  res.status(200).render('signup' , {
    title: 'Welcome to SignUp Screen!'
  })
});

exports.getAccount = catchAsync(async (req , res , next) => {
  const user = await User.findById(req.user.id);
  res.status(200).render('account' , {
    title: 'User Setting',
    user: user
  })
});

exports.getMyTours = catchAsync(async (req, res, next) => {``
  const userBookings = await booking.find({
    user: req.user.id
  });
  const tourIds = userBookings.map( el => el.tour.id);
  const tours = await Tour.find({ _id : {$in : tourIds } });
  res.status(200).render('overview' , {
    title: 'My Booked Tours',
    tours
  })
});

exports.updateUserData = catchAsync( async(req, res , next) => {
  const updatedUser = await User.findByIdAndUpdate(req.user.id , {
    name: req.body.name,
    email: req.body.email
  },
  {
    new:true,
    runValidators:true
  }); 

  const user = await User.findById(req.user.id);
  res.status(200).render('account' , {
    title: 'User Setting',
    user: updatedUser
  })
});