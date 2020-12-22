import React from "react";
import App from "next/app";
import Page from "../components/Page";
import { AppProvider } from "../context/AppProvider";
import { I18nProvider } from "../context/I18nProvider";
import { ResponsiveProvider } from "../context/Responsive";

type AppProp = {
  Component: React.FunctionComponent;
  pageProps: any;
};

const MyApp = ({ Component, pageProps }: AppProp) => {
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
