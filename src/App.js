import React from 'react';
import Normal from './components/Normal';
import Professional from './components/Professional';
import Result from './components/Result';

const App = (props) => {

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="form-group row w-100 justify-content-center">
                <div className="btn-group-vertical order-sm-1 m-5 m-md-0">
                    <button className="btn btn-dark border">روش معمولی</button>
                    <button className="btn btn-dark border">روش حرفه‌ای</button>
                </div>
                <Normal/>
                <Professional/>
                <Result/>
            </div>
        </div>
    )
}

export default App;