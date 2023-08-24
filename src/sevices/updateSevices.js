import axios from "../utils/request";

const updateSevices=(id,name,job='IT')=>{
    return axios.put(`/users/${id}`,{name,job});
}

export default updateSevices;