import axiosInstance from "./axiosInstance";

const getAboutImg = async () => {
    const response = await axiosInstance.get("/abouthero/");
    return response.data;
}


export default getAboutImg;