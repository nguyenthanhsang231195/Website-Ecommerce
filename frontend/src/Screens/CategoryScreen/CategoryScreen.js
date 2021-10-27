import React from 'react';
import { Link } from 'react-router-dom';
import Filter from '../../Components/Filter/Filter';
import productData from '../../Data/data';

import formatCurrency from '../../util';
import './CategoryScreen.css'

class CategoryScreen extends React.Component {

    constructor(){
        super();
        this.state = {
            products: productData.getProducts(12),
            size: "",
            sort: "",
            color: "",
            filterList: 
            [
                {
                    id: 1,
                    name: 'Áo Sơ Mi',
                    value: 'ao-so-mi', 
                }, 
                {
                    id: 2,
                    name: 'Váy Liền Thân',
                    value: 'vay-lien-than', 
                },
                {
                    id: 3,
                    name: 'Giày',
                    value: 'giay', 
                },
                {
                    id: 4,
                    name: 'Đầm Ngủ',
                    value: 'dam-ngu', 
                },
                {
                    id: 5,
                    name: 'Váy',
                    value: 'vay', 
                },
            ],
            activeFilter: [],
        };
    }

    sortProducts = (event) => {
        const sort = event.target.value;
        console.log(event.target.value);
        this.setState((state) => ({
            sort: sort,
            products: this.state.products
                .slice()
                .sort((a, b) =>
                    sort === "lowest" ? a.price > b.price ? 1 : -1
                    : sort === "highest" ? a.price < b.price ? 1 : -1
                    : a._id < b._id ? 1 : -1
                    ),
                }
            )
        );
    };

    filterProducts = (event) => {
        console.log(event.target.value);
        if (event.target.value === "") {
            this.setState({ size: event.target.value, products: productData.getProducts(12) });
        } else {
            this.setState({
                size: event.target.value,
                products: productData.getProducts(12).filter(
                    (product) => product.size.indexOf(event.target.value) >= 0
                ),
            }
        );
    }};

    colorProducts = (event) => {
        console.log(event.target.value);
        if (event.target.value === "") {
            this.setState({ color: event.target.value, products: productData.getProducts(12) });
        } else {
            this.setState({
                color: event.target.value,
                products: productData.getProducts(12).filter(
                    (product) => product.color.indexOf(event.target.value) >= 0
                ),
            }
        );
    }};

    onFilterChange(filter) {
        const { filterList, activeFilter } = this.state;
        if (filter === "ALL") {
            if (activeFilter.length === filterList.length) {
                this.setState({ activeFilter: [] });
            } else {
                this.setState({ activeFilter: filterList.map(filter => filter.value) });
            }
        } else {
            if (activeFilter.includes(filter)) {
                const filterIndex = activeFilter.indexOf(filter);
                const newFilter = [...activeFilter];
                newFilter.splice(filterIndex, 1);
                this.setState({ activeFilter: newFilter });
            } else {
                this.setState({ activeFilter: [...activeFilter, filter] });
            }
        }
    }

render() {
    const { filterList, activeFilter } = this.state;
    let filteredList;
    if (
        activeFilter.length === 0 ||
        activeFilter.length === filterList.length
    ) {
        filteredList = this.state.products;
    } else {
        filteredList = this.state.products.filter(item =>
            this.state.activeFilter.includes(item.categorySlug)
        );
    }
    
    return (
<div className="category-screen">
   <div className="filter-category">
        <Filter
            count={this.state.products.length}
            sort={this.state.sort}
            size={this.state.size}
            color={this.state.color}
            filterProducts={this.filterProducts}
            sortProducts={this.sortProducts}
            colorProducts={this.colorProducts}>
        </Filter>

        <div className="searchContainer">
            <h3>
                Danh mục sản phẩm 
            </h3>

            <form>
                <div className="checkbox-div">
                    <label htmlFor="myInput"> Tất cả sản phẩm: </label>
                    <input
                        id="myInput"
                        type="checkbox"
                        onClick={() => this.onFilterChange("ALL")}
                        checked={activeFilter.length === filterList.length}
                    />
                </div>

                {this.state.filterList.map(filter => (
                    <React.Fragment>
                        <div className="checkbox-div">
                            <label htmlFor={filter.id}> {filter.name} </label>
                            <input
                                id={filter.id}
                                type="checkbox"
                                checked={activeFilter.includes(filter.value)}
                                onClick={() => this.onFilterChange(filter.value)}
                            />
                        </div>
                    </React.Fragment>
                    ))}
               
            </form>
        </div>
   </div>

    <div className="product-category">
        <div className="discount-product">
            <ul>
            {filteredList.map(product => (
                <li key={product._id}>
                    <div className="box-product">
                        <Link to={`/product/${product.slug}`}>
                            <img className="product-discount-image" src={product.image_main} alt={product.name} />
                        </Link>

                        <Link to={`/product/${product.slug}`}>
                            <h2 className="product-discount-name"> {product.name} </h2>
                        </Link>
                        
                        <div className="product-discount-sell">
                            <h3 className="product-discount-price"> 
                                {formatCurrency(product.price)}
                            </h3>
                            <h3 className="product-discount-price-sell"> 
                                <small>
                                    {formatCurrency(product.pricesell)}
                                </small>
                            </h3>
                        </div>
                    </div>
                </li>
            ))}
            </ul>
        </div> 
    </div>
</div>
        );
    }
}

export default CategoryScreen;