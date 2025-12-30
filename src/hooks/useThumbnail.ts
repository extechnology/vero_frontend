import { useQuery } from "@tanstack/react-query";
import getThumbnail from "@/api/getThumbnail";

const useThumbnail = () => {
    const { data: thumbnail, isLoading } = useQuery({
        queryKey: ["thumbnail"],
        queryFn: getThumbnail,
        retry: 1,
    });
    return { thumbnail, isLoading };
};

export default useThumbnail;
