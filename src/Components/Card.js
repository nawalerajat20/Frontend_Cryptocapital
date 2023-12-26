
import React from 'react'

function Card({ data }) {
    return (
        <div className='card'>
            {data.map(crypto => (
                <div className='card-body'>
                    <img src={crypto.icon} alt="" srcset="" />
                    <h2>{crypto.name}</h2>
                    <h2>{crypto.symbol}</h2>
                    <a href={crypto.websiteUrl}>View</a>
                </div>
            ))}
        </div>
    )
}

export default Card