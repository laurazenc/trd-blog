import { useEffect, useState } from "react";
import { buildUrl } from "../utils/buildUrl";

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;

type StateProps = {
  state: "LOADING" | "SUCCESS" | "ERROR";
  error?: string;
  data?: any[];
};

export async function fetchAPI(path) {
  const requestUrl = buildUrl(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export const useApi = (url: string) => {
  const [data, setData] = useState<StateProps>({
    state: apiStates.LOADING,
    error: "",
    data: [],
  });
  const setPartData = (partialData: StateProps) => {
    setData({ ...data, ...partialData });
  };

  useEffect(() => {
    setPartData({
      state: apiStates.LOADING,
    });
    fetchAPI(url)
      .then((data) => {
        setPartData({
          state: apiStates.SUCCESS,
          data,
        });
      })
      .catch((err) => {
        setPartData({
          state: apiStates.ERROR,
          error: err,
        });
      });
  }, []);

  return data;
};
