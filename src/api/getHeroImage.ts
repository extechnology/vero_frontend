import axiosInstance from "./axiosInstance";

const getHeroImg = async() => {
    const response = await axiosInstance.get("/hero-image");
    return response.data;
}

export default getHeroImg;


