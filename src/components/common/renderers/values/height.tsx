type Props = {
  height: number;
};

export default function Height({ height }: Props) {
  return <span>{height}cm</span>;
}
