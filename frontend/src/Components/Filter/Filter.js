import React, { Component } from "react";
import './Filter.css';

export default class Filter extends Component {
render() {
    return (
<div className="filter">
    <div className="filter-result">
        {this.props.count} Sản phẩm 
    </div>
    <div className="filter-sort">
        Mức giá: {" "}
        <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option> Latest </option>
            <option value="lowest"> Lowest </option>
            <option value="highest"> Highest </option>
        </select>
    </div>

    <div className="filter-size">
        Kích thước: {" "}
        <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value=""> ALL </option>
            <option value="S"> S </option>
            <option value="M"> M </option>
            <option value="L"> L </option>
            <option value="XL"> XL </option>
        </select>
    </div>

    <div className="filter-color">
        Màu sắc: {" "}
        <select value={this.props.color} onChange={this.props.colorProducts}>
            <option value=""> ALL </option>
            <option value="Baby Blue"> Xanh trơn </option>
            <option value="Red"> Đỏ </option>
            <option value="Pink"> Hồng </option>
            <option value="Flamingo"> Flamingo </option>
            <option value="Orange"> Cam </option>
            <option value="Light Gray"> Xám trắng </option>
            <option value="Medium Gray"> Xám si </option>
            <option value="White"> Trắng </option>
            <option value="Blue"> Xanh </option>
            <option value="Black"> Đen </option>
            <option value="Shushine"> Vàng nắng </option>
            <option value="Yellow"> Vàng </option>
        </select>
    </div>
</div>
        );
    }
}