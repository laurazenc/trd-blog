import React, { useEffect } from "react";
import Page from "../components/Page";
import { AppProvider } from "../context/AppProvider";
import { I18nProvider } from "../context/I18nProvider";
import { ResponsiveProvider } from "../context/Responsive";
import { useRouter } from "next/router";

import * as gtag from "../utils/gtag";

type AppProp = {
  Component: React.FunctionComponent;
  pageProps: any;
};

const MyApp = ({ Component, pageProps }: AppProp) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <AppProvider>
      <ResponsiveProvider>
        <I18nProvider language={"es"}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </I18nProvider>
      </ResponsiveProvider>
    </AppProvider>
  );
};

export default MyApp;
