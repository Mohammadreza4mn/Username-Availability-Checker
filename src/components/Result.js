import React, { useContext } from 'react';
import GenerateContext from '../context/Generate-context';
import Availability from './Availability';

const Result = (props) => {

    const getUserName = useContext(GenerateContext);

    return (
        <div className="col-md-10">
            <table className="table table-dark text-center table-hover rounded">
                <caption>
                    <a className="badge badge-light" target="_blank"  href="http://github.com/mohammadreza4mn">
                        <img style={{ width: "50px" }} src={`${process.env.PUBLIC_URL}/assets/img/m.m.jpg`} />
                    </a>
                </caption>
                <thead>
                    <tr>
                        <th scope="col">نام کاربری پیشنهادی</th>
                        <th scope="col" colspan="5">وبسایت های قابل ثبت نام</th>
                    </tr>
                </thead>
                <tbody>
                    {getUserName.resultUserName.map((item, index) =>
                        <Availability resultUserName={item} key={index} />
                    )}
                </tbody>
            </table>
            <button className="btn btn-dark border btn-block" onClick={getUserName.actionDisplay}>مرحله قبل</button>
        </div >
    )
}

export default Result;