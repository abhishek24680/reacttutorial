import React from 'react'

const CardFeatures = ({ menuData }) => {
    return (
        <>
            <section className='main-card--container'>
                {
                    menuData.map((currentValue) => {
                        const { id, name, restaurant, price, image, description } = currentValue;
                        return (
                            <>
                                <div className='card-container' key={id}>
                                    <div className='card'>
                                        <div className='card-body'>
                                            <span className='card-number card-circle subtle'>
                                                {price}
                                            </span>
                                            <span className='card-author subtle'>
                                                Prepared By: {restaurant}
                                            </span>
                                            <h2 className='card-title'>
                                                {name}
                                            </h2>
                                            <span className='card-description subtle'>
                                                {description}
                                            </span>
                                            <div className='card-read'>Recipe</div>
                                        </div>
                                        <div>
                                            <img src={image} alt="images" className='card=media' />
                                            <span className='card-tag subtle'>Order Now</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}

export default CardFeatures