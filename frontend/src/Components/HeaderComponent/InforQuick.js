import React from 'react';
import './InforQuick.css';

export default function InforQuick() {
    return (
<div className="top-header">
    {/* Left */}
    <div className="header-left">
        <div className="box-address">
            <i className="fa fa-map-marker"></i>
            <span> 21 Thép Mới, P12, Q.Tân Bình, TP.HCM </span>
        </div>
    </div>

    {/* Right */}
    <div className="header-right">
        <div className="box-call">
            <i className="fa fa-phone"></i>
            <span> :0979.456.456 </span>
        </div>

        <div className="box-search">
            <form className="input-group">
                <input type="text" placeholder="Tìm kiếm..." />
                <button type="submit"> <i className="fas fa-search"></i> </button>
            </form>
        </div>
    </div>
</div>
    )
}
