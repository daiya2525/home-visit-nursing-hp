import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

import "./styles/body/body.module.css";
import ScrollToTop from "./components/organisms/utils/ScrollToTop";
import { HeaderLayout } from "./components/templates/HeaderLayout";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <HeaderLayout>
          <Router />
        </HeaderLayout>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
