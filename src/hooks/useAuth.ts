import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import toast from "react-hot-toast";
import type { LoginPayload } from "../types/auth";

export const useAuth = () => {
  const [formData, setFormData] = useState<LoginPayload>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/products");
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async () => {
    try {
      const data = await loginUser(formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      setError("");
      navigate("/products");
      toast.success(`მოგესალმებით, ${formData.username}`);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("შეცდომა დალოგინებისას");
    }
  };

  return { formData, error, handleChange, handleLogin };
};
