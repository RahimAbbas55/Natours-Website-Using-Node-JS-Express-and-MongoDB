/* eslint-disable*/
import axios from "axios";
import { showAlert } from './alerts';

export const updatePass = async (passwordCurrent , password , passwordConfirm) => {
    try 
    {
        const res = await axios({
            method: 'PATCH',
            url: 'http://127.0.0.1:8000/api/v1/users/updateMyPassword',
            data: {
                passwordCurrent , password , passwordConfirm
            }
        });
        if(res.data.status === 'success'){
            showAlert('success' , 'Password updated successfully!');
            setTimeout(() => {
                location.reload(true);
            }, 5000);
        }
    } 
    catch (err) 
    {
        showAlert('error' , err.response.data.message);
    }
};