import "./App.css";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useScreenFixedProvider } from "../src/component/context/ScreenFixedProvider";

function App() {
  const { showOverlay, setShowOverlay } = useScreenFixedProvider();

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
