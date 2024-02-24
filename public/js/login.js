import axios from "axios";
import { showAlert } from "./alerts";

//SignUp Function
export const signup = async (username, userEmail, pass, confirmPass, userRole) => {
    try 
    {
        if (userRole === 'user' || userRole === 'guide' || userRole === 'lead-guide')
        {
            const res = await axios({
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/v1/users/signup',
                data: {
                    name: username,
                    email: userEmail,
                    password: pass,
                    passwordConfirm: confirmPass,
                    photo: 'default.jpg',
                    role: userRole
                }
            });
            console.log(res);
            if (res.data.status === "success") {
                showAlert("success", "SignUp Successful!");
                window.setTimeout(() => {
                  location.assign("/");
                }, 1500);
            }
        }
        else
        {
            showAlert('error' , `You can not register as a ${userRole}! `);
        }
    } 
    catch (err) 
    {
        showAlert('error' , err.response.data.message);
    }
};

//LogIn function
export const login = async (em, pass) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/v1/users/login",
      data: {
        email: em,
        password: pass,
      },
    });
    console.log(em, pass);
    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

//LogOut Function
export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/v1/users/logout",
    });
    if (res.data.status === "Success") {
      showAlert("success", "Logged out successfully!");
      location.reload(true);
    }
  } catch (err) {
    console.log(err.response);
    showAlert("error", "Error logging out! Try again later.");
  }
};
