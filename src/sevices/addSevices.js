import axios from "../utils/request"

const addSevices=(name,job)=>{
    return axios.post('/user',{name,job});
}

export default addSevices