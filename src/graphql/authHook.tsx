import type { Router } from "next/router";
import type { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import type { Client } from "urql";
import { setAuthCode } from "./auth";
import { newClient } from "./urql";

const PARAM_AUTH_ERROR = "auth_error";
const PARAM_AUTH_TOKEN = "auth_token";
export const PARAM_AUTH_SIGNOUT = "auth_signout";

export const useAuthWatch = (
  router: Router,
  setClient: Dispatch<SetStateAction<Client>>
) => {
  return useEffect(() => {
    // check to sign in
    const tempUrl = new URL(window.location.href);
    const authError = tempUrl.searchParams.get(PARAM_AUTH_ERROR);
    const authCode = tempUrl.searchParams.get(PARAM_AUTH_TOKEN);
    const authSignOut = tempUrl.searchParams.get(PARAM_AUTH_SIGNOUT);
    if (!authError && !authCode && !authSignOut) return;
    if (authError) {
      toast.error(`Cannot sign in: ${authError}`);
    } else if (authCode) {
      toast.success("Signed in successfully");
      setAuthCode(authCode);
    } else if (authSignOut === "1") {
      toast.success("Signed out successfully");
      setAuthCode("");
    }
    setClient(newClient());
    tempUrl.searchParams.delete(PARAM_AUTH_ERROR);
    tempUrl.searchParams.delete(PARAM_AUTH_TOKEN);
    tempUrl.searchParams.delete(PARAM_AUTH_SIGNOUT);
    router.replace(tempUrl);
  }, [router, setClient]);
};
