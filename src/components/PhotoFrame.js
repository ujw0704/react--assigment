import React from 'react';

 const PhotoFrame = ({ url, title }) => {
   return(
    <div className='photoFrame'>
      <img src={url} alt='loading...'/>
      <h3>{title}</h3>
      
    </div>
   )
}
export default  PhotoFrame;