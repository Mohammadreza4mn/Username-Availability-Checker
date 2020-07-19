import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Availability = (props) => {

    const [response, setResponse] = useState([15]);
    const usable = [];

    useEffect(
        () => {
            const sites = ['gitlab', 'github', 'instagram', 'pinterest', 'twitter']
            sites.map((item, index) => {
                axios.get(`https://username-availability.herokuapp.com/check/${item}/${props.resultUserName}`)
                    .then(res => {
                        if (res.data.possible === true) {
                            usable.push(item)
                        } else {
                            usable.push("")
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
            )

            const timer = setInterval(() => {
                setResponse((last) => [last - 1])
            }, 1000)

            setTimeout(() => {
                clearInterval(timer)
                setResponse(usable)
            }, 15000)

        }, []
    )

    return (
        <tr>
            <td>{props.resultUserName}</td>
            {response.map((item, index) =>
                <td key={index}>{item}</td>
            )}
        </tr>
    )
}


export default Availability;