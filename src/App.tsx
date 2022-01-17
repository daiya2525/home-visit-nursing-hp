import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

import "./styles/body/body.module.css";
import ScrollToTop from "./components/organisms/utils/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Router />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
