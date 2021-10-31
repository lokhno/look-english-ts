import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./pages/Main";
import { store } from "./store";

import "./styles/Global.scss";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Main />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
