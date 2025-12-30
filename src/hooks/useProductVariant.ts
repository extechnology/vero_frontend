import { useQuery } from "@tanstack/react-query";
import getProductVariant from "@/api/getProductVariant";
import type { Product } from "@/types/product";

const useProductVariant = () => {
    const { data: productVariant, isLoading } = useQuery<Product[], Error>({
        queryKey: ["product-variant"],
        queryFn: getProductVariant,
        retry: 1,
    });
    return { productVariant, isLoading };
};

export default useProductVariant;
    