/* @refresh reload */
import "./styles/main.sass";

import { render } from "solid-js/web";
import { i18n } from "@/shared/lib";
import { retrieveRawInitData, postEvent } from "@telegram-apps/bridge";

import { tgGenerateSign } from "@/shared/lib";

import App from "./App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

/* init data */
postEvent("iframe_ready", {
  reload_supported: true,
});

/* get start params */
const preparedAuthData = tgGenerateSign(retrieveRawInitData());
if (preparedAuthData) {
  // console.log(preparedAuthData);
}

i18n.parseLocale();
render(() => <App />, root!);
