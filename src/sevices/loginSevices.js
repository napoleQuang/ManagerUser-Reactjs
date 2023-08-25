import axios from "../utils/request";

const loginSevices=(email,pass)=>{
    return axios.post('/login',{email,password:pass});
}

export default loginSevices;