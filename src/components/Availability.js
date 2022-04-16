import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Availability = (props) => {
    const sites = ['gitlab', 'github', 'instagram', 'pinterest', 'twitter']
    let usable = [];

    const [response, setResponse] = useState(Array.from({ length: sites.length }, () => <span className="spinner-border" />));

    useEffect(
        () => {
            axios.all(sites.map((item) => axios.get(`https://username-availability.herokuapp.com/check/${item}/${props.resultUserName}`)))
                .then(
                    axios.spread((...res) => {
                        res.forEach(({ data }, index) => {
                            if (data.possible === true) {
                                usable[index] = sites[index]
                            } else {
                                usable[index] = ""
                            }

                        })
                    })
                )
                .catch(error => {
                    usable = Array.from({ length: sites.length }, () => error.message)
                })
                .finally(() =>
                    setResponse(usable)
                )
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