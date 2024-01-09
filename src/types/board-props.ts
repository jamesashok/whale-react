import { SquareProps } from "./square-props";

export type BoardProps = {
  xIsNext: boolean,
  squares: string[],
  onPlay: Function,
};
