import { useEffect, useState } from "react";

const Products = () => {
  const [username, setUsername] = useState<string | null>("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsed = JSON.parse(userData);
      setUsername(parsed.firstName);
    }
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
      {/* Products list here later */}
    </div>
  );
};

export default Products;
