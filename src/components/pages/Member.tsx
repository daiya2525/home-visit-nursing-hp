import { memo, VFC } from "react";

export const Member: VFC = memo(() => {
  return (
    <h1 style={{ color: "orange", marginTop: "100px" }}>Memberページです</h1>
  );
});
