export const addToCart = async (
  userId: number,
  productId: number,
  quantity = 1,
  token: string
) => {
  const response = await fetch("https://dummyjson.com/carts/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      userId,
      products: [
        {
          id: productId,
          quantity,
        },
      ],
    }),
  });

  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    throw new Error(data.message || "Failed to add to cart");
  }

  return data;
};
