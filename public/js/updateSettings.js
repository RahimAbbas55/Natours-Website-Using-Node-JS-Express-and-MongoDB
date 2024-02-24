// /* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateSettings = async (form) => {
  try 
  {
    console.log(form);
    const res = await axios({
        method: 'PATCH',
        url: 'http://127.0.0.1:8000/api/v1/users/updateMe',
        data: form
    });
    if(res.data.status === 'success'){
        showAlert('success' , 'Data updated successfully!');
        setTimeout(() => {
            // console.log("in timeout");
        } , 5000);
    }  
  } 
  catch (err) {
    showAlert('error', err.response.data.message);
  }
};
