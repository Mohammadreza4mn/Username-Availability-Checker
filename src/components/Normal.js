import React, { useState, useReducer } from 'react';
import GenerateContext from '../context/Generate-context';
import Result from './Result';

const Normal = (props) => {

    const [userName, setUserName] = useState([]);
    const [display, setDisplay] = useState('col-md-5');

    const redSetInfoUser = (state, action) => {
        switch (action.status) {
            case "setFirstName":
                return { ...state, firstName: action.value }
            case "setLastName":
                return { ...state, lastName: action.value }
            default:
                return state
        }
    }
    const [infoUser, setInfoUser] = useReducer(redSetInfoUser, {})

    const inputFirstName = (event) => {
        setInfoUser({ status: "setFirstName", value: event.target.value })
    }
    const inputLastName = (event) => {
        setInfoUser({ status: "setLastName", value: event.target.value })
    }

    const generate = () => {
        if (infoUser.firstName && infoUser.lastName) {
            const arrayUserName = [];
            arrayUserName.push(`${infoUser.firstName.charAt(0) +
                infoUser.firstName.charAt(infoUser.firstName.length - 1)}_${infoUser.lastName.charAt(0) +
                infoUser.lastName.charAt(infoUser.lastName.length - 1)}`)
            arrayUserName.push(`${infoUser.firstName}_${infoUser.lastName.charAt(0) +
                infoUser.lastName.charAt(infoUser.lastName.length - 1)}`)
            arrayUserName.push(`${infoUser.firstName.charAt(0) +
                infoUser.firstName.charAt(infoUser.firstName.length - 1)}_${infoUser.lastName}`)
            arrayUserName.push(`${infoUser.firstName}_${infoUser.lastName}`)
            setUserName(arrayUserName)
            setDisplay('d-none')
        }
    }

    const hide_show = () => {
        setDisplay('col-md-5')
    }

    return (
        <GenerateContext.Provider value={{
            resultUserName: userName,
            actionDisplay: hide_show
        }}>
            <div className={display}>
                <input type="text" className="form-control text-center mb-2" placeholder="نام"
                    onChange={inputFirstName} required autoFocus />
                <input type="text" className="form-control text-center my-2" placeholder="نام خانوادگی"
                    onChange={inputLastName} required />
                <button className="btn btn-dark border btn-block" onClick={generate} >ساختن نام کاربری</button>
            </div>
            {display == 'd-none' ? <Result /> : null}
        </GenerateContext.Provider>
    )
}

export default Normal;