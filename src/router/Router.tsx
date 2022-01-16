import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { HomeRoutes } from "./HomeRoutes";

import styles from "../styles/home/home.module.css";

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
                <section className={styles.bgPc}>
                  <HeaderLayout>{route.children}</HeaderLayout>
                </section>
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
