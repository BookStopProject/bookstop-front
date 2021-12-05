import { Layout } from "@/components/Layout";
import { UserBookEditorWrapper } from "@/components/UserBookEditor";
import CONFIG from "@/config";
import { useAuthWatch } from "@/graphql/authHook";
import { newClient } from "@/graphql/urql";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "urql";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [client, setClient] = useState(newClient);
  useAuthWatch(router, setClient);
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
