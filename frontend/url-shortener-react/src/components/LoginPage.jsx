import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../api/api";
import toast from "react-hot-toast";
import { useStoreContext } from "../contextApi/ContextApi";
import { fadeUpMountProps, tapScale } from "../utils/motionVariants";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { setToken } = useStoreContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onTouched",
  });

  const loginHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post("/api/auth/public/login", data);
      setToken(response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
      toast.success("Welcome back");
      reset();
      navigate("/dashboard");
    } catch {
      toast.error("Login failed. Check your credentials.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="lx-auth-shell">
      <motion.form
        {...fadeUpMountProps(0.06)}
        onSubmit={handleSubmit(loginHandler)}
        className="lx-card w-full max-w-[460px] rounded-2xl p-10 sm:p-11"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-[1.85rem] font-extrabold tracking-tight text-[#0f172a] sm:text-[2.1rem] dark:text-[#f8fafc]">
            Welcome back
          </h1>
          <p className="text-[0.9375rem] text-slate-600 dark:text-[#94a3b8]">
            Sign in to your Lynkforge account
          </p>
        </div>

        <div className="mt-11 flex flex-col gap-7">
          <TextField
            label="Username"
            required
            id="username"
            type="text"
            message="Username is required"
            placeholder="Enter your username"
            register={register}
            errors={errors}
          />

          <TextField
            label="Password"
            required
            id="password"
            type="password"
            message="Password is required"
            placeholder="Enter your password"
            register={register}
            min={6}
            errors={errors}
          />
        </div>

        <motion.button
          disabled={loader}
          type="submit"
          className="lx-btn-primary mt-11 w-full rounded-xl py-3.5 text-[0.9375rem] font-semibold"
          {...tapScale}
        >
          {loader ? "Signing in…" : "Sign in"}
        </motion.button>

        <p className="mt-11 text-center text-[0.9375rem] text-slate-600 dark:text-[#94a3b8]">
          Don&apos;t have an account?{" "}
          <Link
            className="font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-[#60a5fa] dark:hover:text-blue-400"
            to="/register"
          >
            Sign up
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default LoginPage;
