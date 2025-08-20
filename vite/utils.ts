import { BuildMode } from "./types";

export const normalizeFlags = (mode: BuildMode) => ({
  inlineCss: mode.includes("insertcss"),
  compress: mode.includes("compress"),
  analyze: mode === "analyzer",
});
