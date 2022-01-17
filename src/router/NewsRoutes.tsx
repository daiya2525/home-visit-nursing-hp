import { NewsPage } from "../components/pages/NewsPage";
import { NewsDetail } from "../components/pages/NewsDetail";

export const NewsRoutes = [
  {
    path: "/",
    exact: true,
    children: <NewsPage />,
  },
  {
    path: "/:id",
    exact: false,
    children: <NewsDetail />,
  },
];
