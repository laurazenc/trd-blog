import React, { useEffect, useState } from "react";
import config from "../../config";
const I18nContext = React.createContext({} as ContextProps);

type ContextProps = {
  lang: string;
  updateLang: React.Dispatch<React.SetStateAction<string>>;
  t: (key: string, params?: Object) => string;
  ready: boolean;
};

interface II18n {
  language: string;
  children: React.ReactNode;
}

let cache = {};
const fallback = config.defaultLang;

export const I18nProvider = ({ language, children }: II18n) => {
  const [lang, updateLang] = useState(language);
  const [data, setData] = useState(cache);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const loadData = async (langKey: string) => {
      if (langKey in data) {
        return;
      }

      const url = getResourceUrl(config.localePath, langKey);

      return fetch(url)
        .then(async (results) => await results.json())
        .then((resource) => {
          cache[langKey] = resource;
          setData({ ...cache });
        })
        .catch((error) => {
          console.log("Something went wrong.", error, langKey);
          setData({ ...cache });
        });
    };

    Promise.all([loadData(fallback), loadData(lang)]).then(() =>
      setReady(true)
    );
  }, [lang]);

  const t = (key: string, params?: Object) => {
    if (!(lang in data)) {
      return key;
    }

    let value = getValue(data, lang, key);
    if (value === key && lang !== fallback) {
      value = getValue(data, fallback, key);
    }

    return format(value, params);
  };

  function getResourceUrl(root: string, lang: string) {
    return [root, !root || root.endsWith("/") ? "" : "/", lang, ".json"].join(
      ""
    );
  }

  function format(str: string, params?: Object) {
    let result = str;

    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        const template = new RegExp("{" + key + "}", "gm");

        result = result.replace(template, value.toString());
      });
    }

    return result;
  }

  function getValue(languageData: Object, lang: string, key: string) {
    let localeData = languageData[lang];

    if (!localeData) {
      return key;
    }

    return localeData[key.toLocaleLowerCase()] || key;
  }

  return (
    <I18nContext.Provider value={{ lang, updateLang, t, ready }}>
      {children}
    </I18nContext.Provider>
  );
};
export const useI18n = () => React.useContext(I18nContext);
