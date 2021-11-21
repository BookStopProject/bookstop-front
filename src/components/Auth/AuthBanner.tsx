import CONFIG from "@/config";
import type { FC } from "react";
import { useCallback } from "react";
import { Button } from "../Button";

const AuthBanner: FC<{ title?: string }> = ({ title }) => {
  const signIn = useCallback(() => {
    window.location.href = `${CONFIG.API_URI}/auth?redirect_url=${window.location.pathname}`;
  }, []);
  return (
    <div className="flex flex-col items-center">
      <p className="mb-2">{title || "Please sign in to access this section"}</p>
      <Button onClick={signIn} circled variant="ghost">
        Sign in
      </Button>
    </div>
  );
};

export default AuthBanner;
