import React from 'react';
import watch from '../assets/images/Watch.png';

import zeropercent from '../assets/images/zeropercent.png';
import watchbox from '../assets/images/watchbox.png';
import watchstrap from '../assets/images/watchstrap.png';
const LandingCover =() => {
    return(
        <div className='landing-cover'>
            <div className='landing-cover__introduce'>
                <div className='landing-cover__introduce__text'>
                    <h1>Sở Hữu Galaxy Watch</h1>
                    <h3>Thời Thượng</h3>
                </div>
                <img src={watch} alt="watch" className="landing-cover__introduce__item"/>
            </div>
            <div className='landing-cover__sale-off'>
                <div className='landing-cover__sale-off__text'>
                    <h3>Nhận Ngay Ưu Đãi Hấp Dẫn</h3>
                </div>
                <div className='landing-cover__sale-off__option'>
                    <button className="btn btn--actived">Mua Ngay</button>
                    <button className="btn btn--white">Khám phá thêm</button>
                </div>
            </div>
            <div className="landing-cover__information">
                <div className="landing-cover__information__item" >
                    <h3 className="text text--one">Bộ Dây Đeo Đa Phong Cách</h3>
                    <h3 className="text text--two">Trả Góp 0%</h3>
                    <div className="landing-cover__information__item__gifts">
                        <img src={watchbox} alt="zero percent" className="watch-box"/>
                        <img src={watchstrap} alt="zero percent" className="watch-strap"/>
                    </div>
                    <div className="landing-cover__information__item__color">
                        <div className="small-text"> Số lượng có hạn, nhận quà ngẫu nhiên</div>
                        <div className="paas one"></div>
                        <div className="paas two"></div>
                        <div className="paas three"></div>
                        <div className="paas four"></div>
                        <div className="paas five"></div>
                        <div className="paas six"></div>
                        <div className="paas seven"></div>
                        <div className="paas eight"></div>
                        <div className="paas nine"></div>
                        <div className="paas ten"></div>
                    </div>
                    <div className="landing-cover__information__item__zero">
                        <img src={zeropercent} alt="zero percent" className="zero-percent"/>
                    </div>
                </div>
                <div className="landing-cover__information__date"> 
                        <p>Thời gian khuyến mãi: <b>01/01 đến 31/01/2019</b></p>
                        <p>Hotline Samsung: <b>1800 588 855</b> (miễn phí24/7)</p>
                    </div>
            </div>
        </div>
    )
}

export default LandingCover;