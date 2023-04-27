import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import UserContainer from "./component/UserContainer";
import CakeWithPayload from "./component/CakeWithPayload";
import HookIceCreamContainer from "./component/HookIceCreamContainer";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer/>
        {/* <CakeWithPayload /> */}
        {/* <HookIceCreamContainer/> */}
      </div>
    </Provider>
  );
}

export default App;
