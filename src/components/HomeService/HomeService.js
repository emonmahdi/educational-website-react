import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'; 
const element = <FontAwesomeIcon icon={faLaptopCode} />


const HomeService = (props) => {
    const {title, price, image,lesson, description} = props.homeService;
    console.log(props);
    return (
        <>
        <div className="col-md-4 p-3 ">
             <div className="single-course">
                 <div className="card">
                     <img src={image} className='img-fluid card-img-top' alt="" />
                     <div className="card-body">
                        <h2 className='text-left'>{title}</h2>
                        <p>{description.slice(0, 150)}</p> 
                     </div>
                     <div className="card-footer">
                        <div className="price d-flex justify-content-between align-items-center">
                            <h3 className='fw-bold'>{price}</h3>
                            <p className='pt-3 fw-bold'>{element} {lesson}</p>
                        </div> 
                     </div>
                 </div>
             </div>
        </div>
        </>
    );
};

export default HomeService;