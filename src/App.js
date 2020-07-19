import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Normal from './components/Normal';
import Professional from './components/Professional';

const App = (props) => {

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="form-group row w-100 justify-content-center">
                <Router>
                    <div className="btn-group-vertical order-sm-1 m-5 m-md-0">
                        <Link to="/">
                            <button className="btn btn-dark border">روش معمولی</button>
                        </Link>
                        <Link to="/professional">
                            <button className="btn btn-dark border">روش حرفه‌ای</button>
                        </Link>
                    </div>
                    <Route exact path="/" component={Normal} />
                    <Route exact path="/professional" component={Professional} />
                </Router>
            </div>
        </div>
    )
}

export default App;