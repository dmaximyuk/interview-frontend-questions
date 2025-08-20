import {
  type Component,
  type JSX,
  For,
  createSignal,
  createMemo,
  Show,
} from "solid-js";

import { Panel, Title, Text, Cell } from "@tma-solidjs/ui";

interface QuizItem {
  id: string;
  title: string;
  image?: string;
  explanation?: string;
  answers: {
    id: string;
    text: string;
    correct?: boolean;
  }[];
}

interface QuizProps extends JSX.HTMLAttributes<HTMLElement> {}

const Quiz: Component<QuizProps> = (props) => {
  const [index, setIndex] = createSignal<number>(0);
  const [questions] = createSignal<QuizItem[]>(
    (() => {
      return [];
    })(),
  );

  const question = createMemo(() => questions()[index()]);

  return (
    <Panel>
      <Show when={question()}>
        {(q) => (
          <>
            <Text>
              {index()} / {questions().length}
            </Text>
            <Title>{q().title}</Title>
            <For each={q().answers}>
              {(a, i) => {
                return <Cell after={`${i() + 1}`}>{a.text}</Cell>;
              }}
            </For>
          </>
        )}
      </Show>
    </Panel>
  );
};

export default Quiz;
