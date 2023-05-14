import React from 'react';
import './Body2.css';
import images from '../../images.json';

function Body2() {
  return (
    <div className='bdy2'>
      <div className="clip">
        <h1 className="tx1">Our focus is on developing secure, high- <br /> performing language models that cater to  <br />the needs of enterprises.</h1>
        <h5 className='tx2'>To ensure exceptional support and data security, our high-performance language<br /> models can be tailored to fit public, private, or hybrid clouds. We offer customizable<br /> options for our language models, allowing you to choose the best fit for your specific<br /> needs.</h5>

        {/* {images.map((image) => (
          <img key={image.id} src={image.src}  />
        ))} */}
      </div>
    </div>
  );
}

export default Body2;
