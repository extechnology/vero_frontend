import axiosInstance from "./axiosInstance";

const getThumbnail = async () => {
    const response = await axiosInstance.get("/youtubevideo/");
    return response.data;
}

export default getThumbnail;