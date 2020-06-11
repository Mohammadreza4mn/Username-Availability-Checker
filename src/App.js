import React, { useState } from 'react';
import Normal from './components/Normal';
import Professional from './components/Professional';

const App = (props) => {

    const [method, setMethod] = useState('normal');

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center" id="hava">
            <div className="form-group row w-100 justify-content-center">
                <div className="btn-group-vertical order-sm-1 m-5 m-md-0">
                    <button className="btn btn-dark border" onClick={setMethod.bind(this, 'normal')}>روش معمولی</button>
                    <button className="btn btn-dark border" onClick={setMethod.bind(this, 'professional')}>روش حرفه‌ای</button>
                </div>
                {method == 'normal' ? <Normal /> : <Professional />}
            </div>
        </div>
    )
}

export default App;