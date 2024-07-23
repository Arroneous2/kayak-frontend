import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { APIProvider } from "@vis.gl/react-google-maps";

function App() {
  return (
    <div>
      <APIProvider
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        solutionChannel="GMP_devsite_samples_v3_rgmautocomplete"
      >
        <BrowserRouter>
          <Header />
          <Content />
          <Footer />
        </BrowserRouter>
      </APIProvider>
    </div>
  );
}

export default App;
