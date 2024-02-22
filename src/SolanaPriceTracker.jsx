import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SolanaPriceTracker = () => {
    const [solanaPrice, setSolanaPrice] = useState(null);

    useEffect(() => {
        const fetchSolanaPrice = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
                setSolanaPrice(response.data.solana.usd.toFixed(2));
            } catch (error) {
                console.error('Error fetching Solana price:', error);
            }
        };

        fetchSolanaPrice();
        // Fetch every 10 seconds (1,000 milliseconds)
        const intervalId = setInterval(fetchSolanaPrice, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures useEffect runs only once on mount

    return (
        <div className="solana-price">
            {solanaPrice !== null ? (
                <p>${solanaPrice}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default SolanaPriceTracker;
