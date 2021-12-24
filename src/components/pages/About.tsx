import { memo, VFC } from "react";

export const About: VFC = memo(() => {
  return (
    <h1 style={{ color: "orange", marginTop: "100px" }}>Aboutページです</h1>
  );
});
