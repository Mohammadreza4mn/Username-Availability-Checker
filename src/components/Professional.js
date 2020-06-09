import React from 'react';

const Professional = (props) => {

    return (
        <div className="col-md-5">
            <input type="text" className="form-control text-center mb-2" placeholder="نام" />
            <input type="text" className="form-control text-center my-2" placeholder="(المان مورد علاقه(مثل رنگ، شخصیت سینمایی و غیره" />
            <input type="text" className="form-control text-center my-2" placeholder="سن" />
            <button className="btn btn-dark border btn-block">ساختن نام کاربری</button>
        </div>
    )
}

export default Professional;