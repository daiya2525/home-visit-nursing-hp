import { memo, VFC } from "react";

export const Home: VFC = memo(() => {
  return (
    <h1 style={{ color: "orange", marginTop: "100px" }}>Homeページです</h1>
  );
});
