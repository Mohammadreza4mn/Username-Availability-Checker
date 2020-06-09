import React from 'react';

const Normal = (props) => {

    return (
        <div className="col-md-5">
            <input type="text" className="form-control text-center mb-2" placeholder="نام" />
            <input type="text" className="form-control text-center my-2" placeholder="نام خانوادگی" />
            <input type="text" className="form-control text-center my-2" placeholder="تاریخ تولد" />
            <button className="btn btn-dark border btn-block">ساختن نام کاربری</button>
        </div>

    )
}

export default Normal;