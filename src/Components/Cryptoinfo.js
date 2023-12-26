import React, { useState } from 'react';
import jsonData from './data.json';

function Cryptoinfo() {
    const [cards] = useState(jsonData);
    return (
        <div>
            <section>
                <div className='container'>
                    <div className='cards'>
                        {cards.map((card, i) => (
                            <div kay={i} className='card3'>
                                <img className='crypto_sym' src={card.icon} alt="" srcset="" />
                                <h2>{card.name}</h2>
                                <h2 className='sym'>{card.symbol}</h2>
                                <a className='web' href={card.websiteUrl}>View</a>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cryptoinfo