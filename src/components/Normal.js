import React, { useState } from 'react';
import GenerateContext from '../context/Generate-context';
import Result from './Result';

const Normal = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState([]);
    const [display, setDisplay] = useState('col-md-5');

    const inputFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const inputLastName = (event) => {
        setLastName(event.target.value)
    }

    const generate = () => {
        if (firstName || lastName) {
            const arrayUserName = [];
            arrayUserName.push(`${firstName}.${lastName.charAt(0) + lastName.charAt(lastName.length - 1)}`)
            setUserName(arrayUserName)
            setDisplay('d-none')
            setFirstName('')
            setLastName('')
        }
    }

    const hide_show = () => {
        setDisplay('col-md-5')
    }

    return (
        <GenerateContext.Provider value={{
            resultUserName: userName,
            display: hide_show
        }}>
            <div className={display}>
                <input type="text" className="form-control text-center mb-2" placeholder="نام"
                    onChange={inputFirstName} value={firstName} />
                <input type="text" className="form-control text-center my-2" placeholder="نام خانوادگی"
                    onChange={inputLastName} value={lastName} />
                <input type="text" className="form-control text-center my-2" placeholder="تاریخ تولد" />
                <button className="btn btn-dark border btn-block" onClick={generate} >ساختن نام کاربری</button>
            </div>
            {display == 'd-none' ? <Result /> : null}
        </GenerateContext.Provider>
    )
}

export default Normal;