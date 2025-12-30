import { useQuery } from "@tanstack/react-query";
import getHeroImg from "@/api/getHeroImage";
// import type { HeroImage } from "@/types/hero";

const useHeroImage = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["hero-image"],
        queryFn: getHeroImg,
    });
    return {heroImage:data,loading:isLoading};
};

export default useHeroImage;
