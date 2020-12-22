import React, { useEffect } from "react";
import Router from "next/router";
import CookieConsent from "react-cookie-consent";
import NProgress from "nprogress";

import Page from "../components/Page";
import { AppProvider } from "../context/AppProvider";
import { I18nProvider } from "../context/I18nProvider";
import { ResponsiveProvider } from "../context/Responsive";
import { useRouter } from "next/router";

import * as gtag from "../utils/gtag";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type AppProp = {
  Component: React.FunctionComponent;
  pageProps: any;
};

const MyApp = ({ Component, pageProps }: AppProp) => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const handleRouteChange = (url: URL) => {
        gtag.pageview(url);
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);
  return (
    <AppProvider>
      <ResponsiveProvider>
        <I18nProvider language={"es"}>
          <Page>
            <Component {...pageProps} />
            <CookieConsent
              location="bottom"
              buttonText="Entendido"
              cookieName="cookieCheck"
              style={{ background: "#222C46" }}
              buttonStyle={{
                background: "#FD504C",
                color: "white",
                fontSize: "13px",
                height: "30px",
                fontFamily: "Inter",
              }}
              expires={150}
            >
              <span style={{ fontSize: "14px", fontFamily: "Inter" }}>
                Esta página web utiliza cookies para mejorar la experiencia de
                usuario.{" "}
              </span>
            </CookieConsent>
          </Page>
        </I18nProvider>
      </ResponsiveProvider>
    </AppProvider>
  );
};

export default MyApp;
