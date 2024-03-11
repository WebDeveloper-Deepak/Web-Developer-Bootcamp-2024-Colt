import React, { useState, useEffect } from "react";

const RANDOM_QUOTE_URL = 'https://api.quotable.io/quotes/random';

export default function QuoteFetcher() {
    const [quote, setQuote] = useState({ content: '', author: '' });
    

    useEffect(() => {
        fetchAndSetQuote()
    }, [])

    async function fetchAndSetQuote() {
        try {
            const res = await fetch(RANDOM_QUOTE_URL);
            const json = await res.json();
            const randomQuote = json[0];
            setQuote(randomQuote);
        } catch (error) {
            console.error("Error fetching quote:", error);
        }
    };

    return (
        <div>
            <button onClick={fetchAndSetQuote}>Get the Quote</button>
            <h1>{quote.content}</h1>
            <p>- {quote.author}</p>
        </div>
    )
}
