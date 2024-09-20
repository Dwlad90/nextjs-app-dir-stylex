
import * as stylex from '@stylexjs/stylex';

const listBoxItemStyles = stylex.create({
  base: {
    backgroundColor: "red"
  }
});

export default function Home() {
  return (
    <div {...stylex.props(listBoxItemStyles.base)}>hello</div>
  );
}