import React from 'react';
import Userdata from './Userdata';
import Basicdetails from './Basicdetails';
import Contactdetail from './Contactdetail';
import Verification from './Verification';

function Userprofile() {
    return (
        <div className='user_profile'>
            <div className='initial_data'>
                <h1>USER PROFILE</h1>
                <div className='Navigator'>
                    <div className='nav_comp'>
                        <a href={Basicdetails}>1</a>
                        <h3>Basic Details</h3>
                    </div>
                    <div className='nav_line'>

                    </div>
                    <div className='nav_comp'>
                        <a href={Contactdetail}>2</a>
                        <h3>Contact Details</h3>
                    </div>
                    <div className='nav_line'>

                    </div>
                    <div className='nav_comp'>
                        <a href={Verification}>3</a>
                        <h3>Verification</h3>
                    </div>
                </div>
            </div>
            <div className='last_data'>
                <div className='section1'>
                    <Userdata />
                </div>
                <div className='section2'>
                    <Basicdetails/>
                </div>
            </div>
        </div>
    )
}

export default Userprofile