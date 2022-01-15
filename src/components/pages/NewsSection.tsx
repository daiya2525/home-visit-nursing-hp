import { memo, VFC } from "react";

export const NewsSection: VFC = memo(() => {
  return (
    <h1 style={{ color: "orange", marginTop: "100px" }}>
      NewsSectionページです
    </h1>
  );
});
