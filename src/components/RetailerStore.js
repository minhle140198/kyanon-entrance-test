import React from 'react';

const RetailerStore = (props) => (
    <div className="retailer-store">
        <img src={props.logo} alt={props.name}/>
        <a className="retailer-store__access" href={props.link}>
            <button className="btn btn--blue">Mua Ngay</button>
        </a>
    </div>
)

export default RetailerStore;


  