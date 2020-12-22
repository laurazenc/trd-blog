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
    fetch(buildUrl(url))
      .then((response) => response.json())
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
