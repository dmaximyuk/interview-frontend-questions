import { Quizlet, Home } from "@/pages";

import { type RouteDefinition } from "@solidjs/router";

export const routes: RouteDefinition[] = [
  {
    component: Home,
    path: "/",
  },
  {
    component: Quizlet,
    path: "/:qid",
  },
];
