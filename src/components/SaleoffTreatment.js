import React from 'react';

const SaleoffTreatment = () => {
    return(
        <div className="saleoff-treatment">
            <button className="btn-sale btn-sale--unactived"><i className="fas fa-chevron-left"></i><p className="saleoff-treatment__text">&nbsp;&nbsp;không có trang trước</p></button>
            <h3>danh sách ưu đãi</h3>
            <button className="btn-sale"><p className="saleoff-treatment__text">sau&nbsp;&nbsp;</p><i className="fas fa-chevron-right"></i></button>
        </div>
    )
}

export default SaleoffTreatment;
