import { Component, JSX } from "solid-js";
import { i18n } from "@/shared/lib";

interface HomeProps extends JSX.HTMLAttributes<HTMLElement> {}

const Home: Component<HomeProps> = () => {
  const { t } = i18n;

  return <div>{t("app")}</div>;
};

export default Home;
