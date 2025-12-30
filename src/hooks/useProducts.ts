import { useQuery } from "@tanstack/react-query";
import getProducts from "@/api/getProducts";
import type { Product } from "@/types/product";

const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: 1,
  });
};

export default useProducts;
