import React from 'react';
import Navbar from '../features/navbar/Navbar';
import ProductDetails from '../features/Product/components/ProductsDetails';

const ProductDetailPage = () => {
    return(
        <div>
            <Navbar>
                <ProductDetails></ProductDetails>
            </Navbar>
        </div>
    )
}
export default ProductDetailPage;