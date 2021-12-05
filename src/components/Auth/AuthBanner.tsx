import CONFIG from "@/config";
import type { FC } from "react";
import { useCallback } from "react";
import { Button } from "../Button";
import { Card } from "../Card";

const AuthBanner: FC<{ title?: string }> = ({ title }) => {
  const signIn = useCallback(() => {
    window.location.href = `${CONFIG.API_URI}/auth?redirect_url=${window.location.pathname}`;
  }, []);
  return (
    <Card
      variant="filled"
      className="flex flex-col items-center mx-auto max-w-md"
    >
      <p className="mb-2">{title || "Please sign in to access this section"}</p>
      <Button onClick={signIn}>Sign in</Button>
    </Card>
  );
};

export default AuthBanner;
