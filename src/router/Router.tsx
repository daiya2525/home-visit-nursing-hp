import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { About } from "../components/pages/About";
import { Contact } from "../components/pages/Contact";
import { Home } from "../components/pages/Home";
import { Member } from "../components/pages/Member";
import { Page404 } from "../components/pages/Page404";
import { Recruitment } from "../components/pages/Recruitment";
// import { HomeRoutes } from "./HomeRoutes";
import { NewsRoutes } from "./NewsRoutes";
export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/member" component={Member} />
      <Route exact path="/recruitment" component={Recruitment} />
      <Route exact path="/contact" component={Contact} />

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
                {route.children}
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
