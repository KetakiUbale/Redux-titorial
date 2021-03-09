import React from 'react';
import images from '../Image/images.png';
function Home()
{
    return(
        <div>
        <div className="add-to-cart img">
            <img src={images}/>
        </div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="data:image/jpeg;base64,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"/>
            </div>
            <div className="text-wrapper item">
                <span>
                 I-Phone
                </span>
            </div>
            <div className="text-wrapper item">
                <span>
                    Price: 100000
                </span>
        </div>
        <div className="btn wrapper item">
        <button> Add to Cart</button></div>
        </div>
        </div>
    
        );
}
export default Home;