import { red } from '@material-ui/core/colors';
import React, { useEffect, useState } from 'react'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

const Covid = () => {
    const [data, setdata] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json");
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setdata(actualData.statewise[0]);

        } catch (err) {
            console.log(err);

        }
    }

    useEffect(() => {
        getCovidData();

        return () => {

        }
    }, []);


    return (
        <>
            <div>
                <h3 className="text-center ">Live🔴</h3>
                <h2 className="text-center">
                    Covid Cases Present Time
                </h2>

            </div>

            <section>
                <div className="container">
                    <div className="row">

                        <div className=" col-xl-4 col-md-5 col-10 g-5 mx-auto ">
                            <div className="card_style country">
                                <h5>o </h5><h3 className="text-capitalize ">Country</h3>
                                <h1>INDIA</h1>
                            </div>
                        </div>

                        <div className=" col-xl-4 col-md-5 col-10 g-5 mx-auto">
                            <div className="card_style">
                                <h5>o </h5><h3 className="text-capitalize">Active Cases</h3>
                                <h1>{data.active}</h1>
                            </div>
                        </div>

                        <div className=" col-xl-4 col-md-5 col-10 g-5 mx-auto ">
                            <div className="card_style confirmed">
                                <h5>o </h5><h3 className="text-capitalize ">confirmed Cases</h3>
                                <h1>{data.confirmed}</h1>
                            </div>
                        </div>

                        <div className=" col-xl-4 col-md-5 col-10 g-5 mx-auto ">
                            <div className="card_style deaths">
                                <h5>o </h5><h3 className="text-capitalize ">deaths</h3>
                                <h1>{data.deaths}</h1>
                            </div>
                        </div>



                        <div className=" col-xl-4 col-md-5 col-10 g-5 mx-auto ">
                            <div className="card_style recovered">
                                <h5>o </h5><h3 className="text-capitalize ">recovered </h3>
                                <h1>{data.recovered}</h1>
                            </div>
                        </div>

                        <div className=" col-xl-4 col-md-5 col-10 g-5 mx-auto ">
                            <div className="card_style lut">
                                <h5>o </h5><h3 className="text-capitalize ">lastupdatedtime</h3>
                                <h3>{data.lastupdatedtime}</h3>
                            </div>
                        </div>
                        <hr className="text-center my-5 w-100" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Covid
