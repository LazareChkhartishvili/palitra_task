import type { LoginPayload } from "../types/auth";
import { loginUser } from "../services/authService";
import toast from "react-hot-toast";
import type { NavigateFunction } from "react-router-dom";

export const handleLogin = async (
  formData: LoginPayload,
  setError: (err: string) => void,
  navigate: NavigateFunction
) => {
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

export const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<LoginPayload>>
) => {
  setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
