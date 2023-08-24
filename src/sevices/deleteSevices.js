import axios from "../utils/request";

const deleteSevices=(id)=>{
    return axios.delete(`/users/${id}`);
}

export default deleteSevices;