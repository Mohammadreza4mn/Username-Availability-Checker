import React, { useContext } from 'react';
import GenerateContext from '../context/Generate-context';

const Result = (props) => {

    const getUserName = useContext(GenerateContext);

    return (
            <div className="col-md-5">
                {getUserName.resultUserName.map((item) => (
                    <input type="text" className="form-control text-center my-1" value={item} key={item} />
                ))}
                <button className="btn btn-dark border btn-block" onClick={getUserName.display}>شروع مجدد</button>
            </div >
    )
}

export default Result;