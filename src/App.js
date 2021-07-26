import Home from "../src/Componets/Page/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./Componets/Element/sidebar";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Switch>
               <Route path="/" exact component={Home} />
               <Route
                  path="/"
                  render={(props) => {
                     return <Sidebar {...props} />;
                  }}
               />
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default App;
