import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../api/api";
import toast from "react-hot-toast";
import { fadeUpMountProps, tapScale } from "../utils/motionVariants";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const registerHandler = async (data) => {
    setLoader(true);
    try {
      await api.post("/api/auth/public/register", data);
      reset();
      navigate("/login");
      toast.success("Account created — you can log in now");
    } catch {
      toast.error("Registration failed");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="lx-auth-shell">
      <motion.form
        {...fadeUpMountProps(0.06)}
        onSubmit={handleSubmit(registerHandler)}
        className="lx-card w-full max-w-[460px] rounded-2xl p-10 sm:p-11"
      >
        <div className="space-y-2 text-center">
          <h1 className="text-[1.85rem] font-extrabold tracking-tight text-[#0f172a] sm:text-[2.1rem] dark:text-[#f8fafc]">
            Create an account
          </h1>
          <p className="text-[0.9375rem] text-slate-600 dark:text-[#94a3b8]">
            Start shortening links for free
          </p>
        </div>

        <div className="mt-11 flex flex-col gap-7">
          <TextField
            label="Username"
            required
            id="username"
            type="text"
            message="Username is required"
            placeholder="Choose a username"
            register={register}
            errors={errors}
          />

          <TextField
            label="Email"
            required
            id="email"
            type="email"
            message="Email is required"
            placeholder="you@example.com"
            register={register}
            errors={errors}
          />

          <TextField
            label="Password"
            required
            id="password"
            type="password"
            message="Password is required"
            placeholder="Choose a secure password"
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
          {loader ? "Creating account…" : "Create account"}
        </motion.button>

        <p className="mt-11 text-center text-[0.9375rem] text-slate-600 dark:text-[#94a3b8]">
          Already have an account?{" "}
          <Link
            className="font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-[#60a5fa] dark:hover:text-blue-400"
            to="/login"
          >
            Sign in
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default RegisterPage;
