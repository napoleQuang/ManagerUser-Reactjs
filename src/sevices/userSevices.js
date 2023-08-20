import axios from "../utils/request";

const userSevices = async (page) => {
    return axios.get(`/users?page=${page}`);
}

export default userSevices;