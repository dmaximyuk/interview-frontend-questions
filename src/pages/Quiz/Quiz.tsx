import { type Component, type JSX, For } from "solid-js";

import { Panel, Cell } from "@tma-solidjs/ui";

import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconChevronRight,
  IconBrandHtml5,
  IconBrandCss3,
  IconWorldWww,
} from "@tabler/icons-solidjs";

interface HomeProps extends JSX.HTMLAttributes<HTMLElement> {}

const elements = [
  {
    description: "42 questions",
    before: IconWorldWww,
    title: "Web Core",
  },
  {
    description: "42 questions",
    before: IconBrandHtml5,
    title: "HTML5",
  },
  {
    description: "42 questions",
    before: IconBrandCss3,
    title: "CSS3",
  },
  {
    description: "42 questions",
    before: IconBrandJavascript,
    title: "JavaScript",
  },
  {
    description: "42 questions",
    before: IconBrandTypescript,
    title: "TypeScript",
  },
];

const Quizlet: Component<HomeProps> = () => {
  return (
    <Panel>
      <For each={elements}>
        {(el) => {
          const Icon = el.before;

          return (
            <Cell
              after={
                <IconChevronRight
                  color={"var(--accent_text_color)"}
                  size={18}
                />
              }
              before={<Icon color={"var(--accent_text_color)"} size={32} />}
              description={el.description}
            >
              {el.title}
            </Cell>
          );
        }}
      </For>
    </Panel>
  );
};

export default Quizlet;
