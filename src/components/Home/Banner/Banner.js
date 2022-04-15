import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner d-flex justify-content-center align-items-center'>
            <div>
                <h1 className='pb-3'>Best food waiting for your belly</h1>
                <InputGroup className="mb-3 w-75 mx-auto search">
                    <FormControl
                        placeholder="Search food items"
                    />
                    <InputGroup.Text className='search-btn' id="basic-addon2">Search</InputGroup.Text>
                </InputGroup>
            </div>
        </div>
    );
};

export default Banner;