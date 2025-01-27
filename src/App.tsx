import { Provider } from "react-redux";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home/Home";
import { LayoutContainer } from "./styled-components";
import store from "./redux/store";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
      <Footer />
    </Provider>
  );
}

export default App;
