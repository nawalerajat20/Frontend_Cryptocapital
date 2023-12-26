import React from 'react';
// import { UserInput } from './API/CryptocapitalAPI';


const Report_a_bug = () => {
    // const[]
  return (
    <div>
        <div className='report'>
            <h1>REPORT A BUG</h1>
        </div>
        <div className='Form'>
            <div className='row1'>
                <div className='component1'>
                    <span>First Name :</span><br />
                    <input type="text" placeholder='Your First Name'/>
                </div>
                <div className='component2'>
                    <span>Last Name :</span><br />
                    <input type="text" placeholder='Your Last Name'/>
                </div>
            </div>
            <div>
                <span>Email :</span><br />
                <input type="email" name="email" id="email" placeholder='Email'/>
            </div>
            <div>
                <span>What was the Bug Found?</span><br />
                <input type="text" placeholder='Enter your Message here' />
            </div>
            <div>
                <span>Details :</span><br />
                <input className = 'details' type="text" />
            </div>
            <div>
                <span>Device Used :</span><br />
                <input type="text" />
            </div>
            <div>
                <span>Browser :</span>
                <input type="text" />
            </div>
            <div>
                <span>Operating System :</span><br />
                <input type="text" />
            </div>
            <div className='btn'>
                <button className='button1'>Send</button>
                <button className='button2'>Cancel</button>
            </div>
        </div>
    </div>
    
  )
}

export default Report_a_bug