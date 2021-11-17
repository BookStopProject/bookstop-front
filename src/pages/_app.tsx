import { Layout } from "@/components/Layout";
import { UserBookEditorWrapper } from "@/components/UserBookEditor";
import CONFIG from "@/config";
import { setAuthCode } from "@/graphql/auth";
import { newClient } from "@/graphql/urql";
import "@/styles/globals.css";
import "@reach/dialog/styles.css";
import "@reach/menu-button/styles.css";
import "@reach/tabs/styles.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Provider } from "urql";

function MyApp({ Component, pageProps }: AppProps) {
  const [client, setClient] = useState(newClient);
  const router = useRouter();
  useEffect(() => {
    // check to sign in
    const authError = router.query["auth_error"];
    const authCode = router.query["auth_token"] as string | undefined;
    const authSignOut = router.query["auth_signout"];
    if (authError) {
      toast.error(`Cannot sign in: ${authError}`);
    } else if (authCode) {
      toast.success("Signed in successfully");
      setAuthCode(authCode);
      setClient(newClient());
      router.replace(router.pathname, undefined, { shallow: true });
    } else if (authSignOut === "1") {
      toast.success("Signed out successfully");
      setAuthCode("");
      setClient(newClient());
      router.replace(router.pathname, undefined, { shallow: true });
    }
  }, [router]);
  return (
    <Provider value={client}>
      <Layout>
        <UserBookEditorWrapper>
          <DefaultSeo
            titleTemplate={"%s | BookStop"}
            canonical={`${CONFIG.APP_URI}/`}
          />
          <Component {...pageProps} />
        </UserBookEditorWrapper>
      </Layout>
      <Toaster />
    </Provider>
  );
}
export default MyApp;
