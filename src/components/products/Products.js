import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Heading from '../Heading';
import Product from './Product';
import data from '../../database/products.json'

const Products = () => {
    
    
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-6 pb-24">
            {/* heading  */}
            <Heading title="Products" />
            {/* products  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
                {data.slice(0,6).map(product => (
                    <Bounce left key={product.id}>
                        <Product {...product} />
                    </Bounce>
                ))}
            </div>
                
        </section>
    )
}

export default Products
