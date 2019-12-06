import React from 'react';

const Footer = (props) => {
    return(
        <div className="footer">
            {/* <div  className="footer__back-to-top">Tro lai dau trang</div>
            <div  className="footer__reply">Phan hoi</div> */}
            <div className="item">
                <h3><a href=".">Bản đồ trang <i className="fas fa-chevron-right"></i></a></h3>
                <ul>
                    <li><a href=".">Thông tin Samsung</a></li>
                    <li><a href=".">Quan hệ nhà đầu tư <i className="fas fa-external-link-alt"></i></a></li>
                    <li><a href=".">Tin tức & sự kiện <i className="fas fa-external-link-alt"></i></a></li>
                    <li><a href=".">Tìm cửa hàng</a></li>
                    <li><a href=".">Liên hệ</a></li>
                    <li><a href=".">Ưu đãi độc quyền</a></li>
                    <li><a href=".">Sống cùng công nghệ</a></li>
                </ul>
            </div>
            <div className="item">
                <h3><a href=".">Bạn cần hỗ trợ?</a></h3>
                <ul>
                    <li><a href="."><i className="far fa-comment-alt"></i>&nbsp;&nbsp;&nbsp;Hỗ trợ trực tuyến <i className="fas fa-external-link-alt"></i></a></li>
                    <li><a href="."><i className="far fa-envelope"></i>&nbsp;&nbsp;&nbsp;E-mail <i className="fas fa-external-link-alt"></i></a></li>
                    <li><a href="."><i className="fas fa-phone-alt"></i>&nbsp;&nbsp;&nbsp;Điện thoại</a></li>
                    <li><a href="."><i className="fas fa-store"></i>&nbsp;&nbsp;&nbsp;Trung tâm bảo hành</a></li>
                
                </ul>
            </div>
            <div className="item">
                <h3><a href=".">Kết nối với chúng tôi</a></h3>
                <ul>
                    <li><a href="."><i className="fab fa-facebook"></i></a></li>
                    <li><a href="."><i className="fab fa-youtube"></i></a></li>
                    <li><a href="."><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer; 