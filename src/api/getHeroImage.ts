import axiosInstance from "./axiosInstance";

const getHeroImg = async() => {
    const response = await axiosInstance.get("/heroimage/");
    return response.data;
}

export default getHeroImg;

