import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

const ShortenUrlPage = () => {
  const { url } = useParams();

  useEffect(() => {
    if (url) {
      window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`;
    }
  }, [url]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-transparent px-6 text-center text-lx-muted">
      <Loader2
        className="size-8 animate-spin text-blue-600 dark:text-blue-400"
        aria-hidden
      />
      <p className="text-sm font-medium text-lx-foreground">Redirecting…</p>
      <p className="max-w-xs text-xs text-lx-muted">
        If nothing happens, check that your backend URL is configured correctly.
      </p>
    </div>
  );
};

export default ShortenUrlPage;
