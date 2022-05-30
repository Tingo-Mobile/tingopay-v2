import React from 'react';

const service = ({serviceIcon, serviceTitle, serviceText}) => {
    return (
        <>
            <div className="col">
                <div className="card">
                    <img src={serviceIcon} className="card-img-top" alt="service" />
                    <div className="card-body">
                        <h5 className="text-tingo">{serviceTitle}</h5>
                        <p className="text-color">{serviceText}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default service