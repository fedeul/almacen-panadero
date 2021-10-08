import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Containers/ItemListContainer";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";
import ItemSalesContainer from "./components/Containers/ItemSalesContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/cartContext";
import OrderConfirmation from "./components/Cart/OrderConfirmation";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <ItemListContainer greeting="¡Hola Usuario!" />
            </Route>
            <Route path="/category/:categoryId" component={ItemListContainer} />
            <Route path="/sales" component={ItemSalesContainer} />
            <Route path="/detail" exact component={ItemDetailContainer} />
            <Route path="/detail/:itemId" component={ItemDetailContainer} />
            <Route path="/cart" exact component={Cart} />
            <Route
              path="/order-confirmation"
              exact
              component={OrderConfirmation}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
