import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CheckBox from '../../Components/CheckBox/CheckBox';
import productData from '../../Data/data';
import formatCurrency from '../../util';
import './CategoryScreen.css';

export default function Category() {

    const initFilter = {
        category: [],
        color: [],
        size: []
    };

    const category = 
    [
        {
            id: 1,
            name: 'Áo Sơ Mi',
            categorySlug: 'ao-so-mi', 
        }, 
        {
            id: 2,
            name: 'Váy Liền Thân',
            categorySlug: 'vay-lien-than', 
        },
        {
            id: 3,
            name: 'Giày',
            categorySlug: 'giay', 
        },
        {
            id: 4,
            name: 'Đầm Ngủ',
            categorySlug: 'dam-ngu', 
        },
        {
            id: 5,
            name: 'Váy',
            categorySlug: 'vay', 
        },
        {
            id: 6,
            name: 'Quần',
            categorySlug: 'quan'
        }
    ]

    const colors =
    [
        {
            id: 1,
            display: "Xanh nước biển",
            color: "Baby Blue",
        },
        {
            id: 2,
            display: "Đỏ",
            color: "Red",
        },
        {
            id: 3,
            display: "Hồng",
            color: "Pink",
        },
        {
            id: 4,
            display: "Hồng ma mị",
            color: "Flamingo",
        },
        {
            id: 5,
            display: "Cam",
            color: "Orange",
        },
        {
            id: 6,
            display: "Xám trắng",
            color: "Light Gray",
        },
        {
            id: 7,
            display: "Trắng ngà",
            color: "Medium Gray",
        },
        {
            id: 8,
            display: "Trắng",
            color: "White",
        },
        {
            id: 9,
            display: "Đen",
            color: "Black",
        },
        {
            id: 10,
            display: "Vàng",
            color: "Yellow",
        },
        {
            id: 11,
            display: "Tím Berry",
            color: "Berry",
        },
        {
            id: 12,
            display: "Xanh thẫm",
            color: "Navy",
        }
    ]

    const sizes = [
        {
            id: 1,
            display: "S",
            size: "S",
        },
        {
            id: 2,
            display: "M",
            size: "M",
        },
        {
            id: 3,
            display: "L",
            size: "L",
        },
        {
            id: 4,
            display: "XL",
            size: "XL",
        }
    ]

    const [filter, setFilter] = useState(initFilter);

    const filterSelect = (type, checked, item) => 
    {
        if(checked) 
        {
            switch(type) {
                case "CATEGORY":
                    setFilter({...filter, category: [...filter.category, item.categorySlug]})
                    break
                case "COLOR":
                    setFilter({...filter, color: [...filter.color, item.color]})
                    break
                case "SIZE":
                    setFilter({...filter, size: [...filter.size, item.size]})
                    break
                default:
                    break
                }
        }else 
            {
            switch(type) 
                {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({...filter, category: newCategory})
                    break
                case "COLOR":
                    const newColor = filter.color.filter(e => e !== item.color)
                    setFilter({...filter, color: newColor})
                    break
                case "SIZE":
                    const newSize = filter.size.filter(e => e !== item.size)
                    setFilter({...filter, size: newSize})
                    break
                default:
                    break
                }
            }
    }

    const productList = productData.getAllProducts()
    const [products, setProducts] = useState(productList)

    const updateProducts = useCallback(() => 
        {
            let temp = productList
            if (filter.category.length > 0) {
                temp = temp.filter(e => filter.category.includes(e.categorySlug))
            }
            if (filter.color.length > 0) {
                temp = temp.filter(e => {const check = e.color.find(color => filter.color.includes(color))
                    return check !== undefined
                })
            }
            if (filter.size.length > 0) {
                temp = temp.filter(e => {const check = e.size.find(size => filter.size.includes(size))
                    return check !== undefined
                })
            }
            setProducts(temp)
        },
        [productList, filter],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts]);

    return (
<div className="category-screen">
    {/* Bộ lọc - Filter */}
    <div className="filter-category">
            <div className="searchContainer">
                {category.map((item) => (
                    <div key={item.id} className="checkbox-div">
                        <CheckBox
                            label={item.name}
                            onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                            checked={filter.category.includes(item.categorySlug)}
                        />
                    </div>
                ))}
            </div>
            <hr />
            <div className="searchContainer">
                {colors.map((item) => (
                   <div key={item.id} className="checkbox-div">
                        <CheckBox
                            label={item.display}
                            onChange={(input) => filterSelect("COLOR", input.checked, item)}
                            checked={filter.color.includes(item.color)}
                        />
                    </div>
                ))}
            </div>
            <hr />
            <div className="searchContainer">
                {sizes.map((item) => (
                    <div key={item.id} className="checkbox-div">
                        <CheckBox
                            label={item.display}
                            onChange={(input) => filterSelect("SIZE", input.checked, item)}
                            checked={filter.size.includes(item.size)}
                        />
                    </div>
                ))}
            </div>
    </div>

    {/* Sản Phẩm */}
    <div className="product-category">
        <div className="discount-product">
            <ul>
            {products.map(product => (
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
    )
}
