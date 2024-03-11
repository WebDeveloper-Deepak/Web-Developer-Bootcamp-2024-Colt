import React, { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = 'https://api.quotable.io/quotes/random';

export default function LoaderQuote() {
    
    const [quote, setQuote] = useState({ content: '', author: '' });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchAndSetQuote() {
            try {
                const res = await fetch(RANDOM_QUOTE_URL);
                const json = await res.json();
                const randomQuote = json[0];
                setQuote(randomQuote);
                setIsLoading(false)
            } catch (error) {
                console.error("Error fetching quote:", error);
            }
        };

        fetchAndSetQuote()
    }, [])


    return (
        <div>
            {isLoading && <p>Loading...</p>}
            <h1>{quote.content}</h1>
            <h2>- {quote.author}</h2>
        </div>
    )
}
