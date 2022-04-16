import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Normal from './components/Normal';
import Professional from './components/Professional';
import axios from "axios";

const App = (props) => {

    const [alert, setAlert] = useState(false)

    useEffect(() => {
        axios.get('https://ipwhois.app/json/?objects=country,success,message')
            .then(({ data }) => {
                if (data.success == true && data.country == "Iran") {
                    setAlert(true)
                }
            })
            .catch(e => console.log(e.message))
    }, [])

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="form-group row w-100 justify-content-center">
                {alert &&
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <div className='flex text-right' dir='rtl'>فیلتر شکن شما خاموش است، در این برنامه از api استفاده شده است که ایران را تحریم کرده است، لطفا IP خود را به خارج ایران تغییر دهید</div>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>}
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