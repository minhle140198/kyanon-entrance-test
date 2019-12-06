import React from 'react';
import RetailerStore from "./RetailerStore";
import tikilogo from "../assets/images/retailers/tikilogo.png"
import fptlogo from '../assets/images/retailers/fptlogo.png';

class Retailers extends React.Component {
    state = {
        retailers :[
            {
                name: "tiki logo",
                logo: tikilogo,
                link: '.'
            },
            {
                name: "fpt logo ",
                logo: fptlogo,
                link: '.'
            },
            {
                name: "tiki logo",
                logo: tikilogo,
                link: '.'
            },
            {
                name: "fpt logo ",
                logo: fptlogo,
                link: '.'
            },
            {
                name: "tiki logo",
                logo: tikilogo,
                link: '.'
            }
        ]
    }
    render() {
        return(
            <div className="retailers-wrapper">
                <div className="feature-block__heading">Đại Lý Bán Lẻ Áp Dụng</div>
                <div className="retailers">
                    {
                        this.state.retailers.map((item, index) => (
                        <RetailerStore key={index} name={item.name} logo={item.logo} link={item.link}/>
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default Retailers;
