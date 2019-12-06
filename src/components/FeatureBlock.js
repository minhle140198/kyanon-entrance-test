import React from 'react';
import galaxyWatchBackground from "../assets/galaxy-watch.png";
import galaxyWatchCombination from "../assets/galaxy-watch-combination.png";

const FeatureBlock = (props) => (
    <div className="feature-block">
        <div className="feature-block__header">
            <div className="feature-block__heading">Sang Trọng và Khác Biệt</div>
            <div className="feature-block__description">Đắm chìm trong thiết kế cao cấp mang đậm vẻ đẹp đương đại từ Samsung Galaxy Watch. Mặt đồng hồ tuỳ chỉnh và bộ dây đeo cá tính giúp bạn thoả sức thể hiện chất tôi khác biệt, biến Galaxy Watch thành phụ kiện thời thượng, nổi bật trong mọi sự kiện</div>
            <button className="btn btn--small">Mua Ngay</button>
        </div>
        <div className="feature-block__img">
            <img src={galaxyWatchCombination} alt="galaxy watch combination"/>
        </div>
        <div className="feature-block__header">
            <div className="feature-block__heading">Hiệu Suất Ấn Tượng</div>
            <div className="feature-block__description above-note">Thoả sức chinh phục mọi hành trình cùng Galaxy Watch với thời lượng pin lên đến 80h sử dụng (*), kết nối Bluetooth vượt trội và công nghệ kháng nước 5ATM ấn tượng.</div>
            <div className="feature-block__description feature-block__description--note">*Thời gian pin khác nhau tuỳ theo loại kết nối và nhu cầu sử dụng. </div>
            <button className="btn btn--small">Mua Ngay</button>
        </div>
        <div className="feature-block__img">
            <img src={galaxyWatchBackground} alt="galaxy watch durability"/>
        </div>
    </div>
)

export default FeatureBlock;