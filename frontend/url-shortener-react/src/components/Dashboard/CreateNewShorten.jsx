import { useState } from "react";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useForm } from "react-hook-form";
import TextField from "../TextField";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import api from "../../api/api";
import toast from "react-hot-toast";
import { fadeUpMountProps, tapScale } from "../../utils/motionVariants";

const CreateNewShorten = ({ setOpen, refetch: _refetch }) => {
  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true);
    try {
      const { data: res } = await api.post("/api/urls/shorten", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      const shortenUrl = `${import.meta.env.VITE_REACT_FRONT_END_URL + "/s/" + `${res.shortUrl}`}`;
      await navigator.clipboard.writeText(shortenUrl);
      toast.success("Short URL copied to clipboard");

      reset();
      setOpen(false);
    } catch {
      toast.error("Could not create short URL");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      {...fadeUpMountProps(0.04)}
      className="lx-card w-full max-w-[440px] shadow-lifted"
    >
      <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className="relative p-6 sm:p-8"
      >
        <motion.button
          type="button"
          disabled={loading}
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 rounded-lg p-2 text-lx-muted transition-colors hover:bg-black/[0.04] hover:text-lx-foreground dark:hover:bg-white/[0.06]"
          aria-label="Close"
          {...tapScale}
        >
          <X className="size-5" />
        </motion.button>

        <h2
          id="create-short-url-title"
          className="pr-10 text-center text-xl font-bold tracking-tight text-lx-foreground sm:text-[1.35rem]"
        >
          New short link
        </h2>
        <p className="mt-2 text-center text-[0.9375rem] text-lx-muted">
          Paste a destination URL — we&apos;ll copy the short link when it&apos;s
          ready.
        </p>

        <div className="mt-8">
          <TextField
            label="Destination URL"
            required
            id="originalUrl"
            placeholder="https://example.com"
            type="url"
            message="URL is required"
            register={register}
            errors={errors}
          />
        </div>

        <motion.button
          disabled={loading}
          className="lx-btn-primary mt-8 w-full py-3"
          type="submit"
          {...tapScale}
        >
          {loading ? "Creating…" : "Create & copy"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CreateNewShorten;
