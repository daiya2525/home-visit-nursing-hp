import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";

import "./styles/body/body.module.css";
import ScrollToTop from "./components/organisms/utils/ScrollToTop";
import { HeaderLayout } from "./components/templates/HeaderLayout";
import { FooterLayout } from "./components/templates/FooterLayout";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <HeaderLayout>
          <FooterLayout>
            <Router />
          </FooterLayout>
        </HeaderLayout>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
