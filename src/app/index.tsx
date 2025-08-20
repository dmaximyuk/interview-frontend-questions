/* @refresh reload */
import "./styles/main.sass";

import { render } from "solid-js/web";
import { i18n } from "@/shared/lib";
import { postEvent } from "@telegram-apps/bridge";

import App from "./App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

/* init data */
try {
  postEvent("iframe_ready", {
    reload_supported: true,
  });
} catch {
  /* empty */
}

i18n.parseLocale();
render(() => <App />, root!);
