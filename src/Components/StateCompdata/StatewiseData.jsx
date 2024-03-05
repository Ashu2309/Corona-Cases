import React, { useState, useEffect } from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './statewise.css';


const StatewiseData = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch("https://data.covid19india.org/data.json");
        const actualval = await res.json();
        console.log(actualval.statewise);
        setData(actualval.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>

            <h1 className="head2 text-center mt-5 mb-3"><span className="text-primary">India  </span>Covid -19 DASHBOARD (Statewise)</h1>

            <div className="container-fluid">
                <div className="row">
                    <table className="maintable col-xxl-10 col-md-11 col-12 text-center mx-auto">
                        <thead className="t_head">
                            <tr>
                                <th>States</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Last Update</th>
                            </tr>
                        </thead>

                        <tbody className="t_body">
                            {
                                data.map((currElem) => {
                                    return (
                                        <tr className="t_body">
                                            <td className="state">{currElem.state}</td>
                                            <td className="confirm">{currElem.confirmed}</td>
                                            <td className="recover">{currElem.recovered}</td>
                                            <td className="death">{currElem.deaths}</td>
                                            <td className="active_table">{currElem.active}</td>
                                            <td className="last">{currElem.lastupdatedtime}</td>
                                        </tr>

                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}

export default StatewiseData
