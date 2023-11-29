import Home from "./pages/home";
import MyAccount from "./pages/my-account";
import Page404 from "./pages/404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import SplashScreen from "./components/splash.screen";
import AppLayout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SplashScreen />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
