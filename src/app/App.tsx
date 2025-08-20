import { type Component } from "solid-js";

import { Router } from "@solidjs/router";
import { Root } from "@tma-solidjs/ui";

import { routes } from "./routes";

const App: Component = () => {
  return (
    <Root>
      <Router>{routes}</Router>
    </Root>
  );
};

export default App;
