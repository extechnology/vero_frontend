import { useQuery } from "@tanstack/react-query";
import getAboutImg from "../api/getAboutImg";


const useAboutImg = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["about-image"],
        queryFn: getAboutImg,
    });
    return { aboutImage: data, isLoading };
};

export default useAboutImg;