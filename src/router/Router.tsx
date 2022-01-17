import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { HomeRoutes } from "./HomeRoutes";
import { NewsRoutes } from "./NewsRoutes";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {HomeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />

      <Route
        path="/news_page"
        render={({ match: { url } }) => (
          <Switch>
            {NewsRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />

      <Route path="*">
        <HeaderLayout>
          <Page404 />
        </HeaderLayout>
      </Route>
    </Switch>
  );
});
