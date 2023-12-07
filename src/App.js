import logo from "./logo.svg";
import "./App.css";
import { Gallery, Navbar } from "./Components";
import CustomRoutes from "./routes/CustomRoutes";

function App() {
   return (
      <div className="App">
         <Navbar />
         <CustomRoutes />
      </div>
   );
}

export default App;
