import "@/styles/globals.css";
import { MainContext } from "@/state";
import { mainReducer } from "@/state/reducer";
import { initialState } from "@/state";
import { useReducer } from "react";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </MainContext.Provider>
  );
}
