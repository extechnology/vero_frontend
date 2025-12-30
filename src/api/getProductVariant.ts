import axiosInstance from "./axiosInstance";

const getProductVariant = async () => {
    const response = await axiosInstance.get("/productvariant/");
    return response.data;
}

export default getProductVariant;