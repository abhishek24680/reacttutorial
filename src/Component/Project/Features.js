import React, { useState } from 'react'
import './style.css'
import Menu from './Menu'
import CardFeatures from './CardFeatures'
import Navbar from './Navbar'

const itemList = [
    ...new Set(Menu.map((currentValue) => {
        return currentValue.category;
    })
    ),
    'Available Foods',
];

const Features = () => {
    const [menuData, updatedMenuData] = useState(Menu);
    const [selectedCategory, updatedSelectedCategory] = useState(itemList);

    const categorySelector = (MenuCategory) => {
        if (MenuCategory === 'Available Foods') {
            updatedMenuData(Menu);
            return;
        }
        const newList = Menu.filter((currentValue) => {
            return currentValue.category === MenuCategory;
        });
        updatedMenuData(newList);
    }
    return (
        <>
            <Navbar categorySelector={categorySelector} itemList={itemList} />
            <CardFeatures menuData={menuData} />
        </>
    )
}

export default Features
