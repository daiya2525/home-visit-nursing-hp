import { memo, ReactNode, VFC } from "react";
import { Footer } from "../organisms/layout/Footer";

type Props = {
  children: ReactNode;
};

export const FooterLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      {children}
      <Footer />
    </>
  );
});
