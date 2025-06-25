import { axiosInstance } from "./axiosInstance";
import { AxiosError } from "axios";

export const addToCart = async (
  userId: number,
  productId: number,
  quantity = 1,
  token: string
) => {
  try {
    const response = await axiosInstance.post(
      "/carts/add",
      {
        userId,
        products: [
          {
            id: productId,
            quantity,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    throw new Error(
      axiosError.response?.data?.message || "Failed to add to cart"
    );
  }
};
