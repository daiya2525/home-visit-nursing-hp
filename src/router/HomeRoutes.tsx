import { About } from "../components/pages/About";
import { Contact } from "../components/pages/Contact";
import { Home } from "../components/pages/Home";
import { Member } from "../components/pages/Member";
import { NewsSection } from "../components/pages/NewsSection";
import { Page404 } from "../components/pages/Page404";
import { Recruitment } from "../components/pages/Recruitment";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/about",
    exact: false,
    children: <About />,
  },
  {
    path: "/member",
    exact: false,
    children: <Member />,
  },
  {
    path: "/recruitment",
    exact: false,
    children: <Recruitment />,
  },
  {
    path: "/contact",
    exact: false,
    children: <Contact />,
  },
  {
    path: "/news_section",
    exact: false,
    children: <NewsSection />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
