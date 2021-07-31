import { useState } from 'react';
const axios = require('axios');

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const click200 = async () => {
        setLoading(true);
        const res = await axios('/api/hello');
        setLoading(false);
    };

    const click204 = async () => {
        setLoading2(true);
        const res = await axios('/api/hello2');
        setLoading2(false);
    };

    return (
        <div>
            <button disabled={loading} onClick={click200}>
                Test button for 200
            </button>
            {loading ? 'Is Loading' : '...'}

            <br />
            <button disabled={loading2} onClick={click204}>
                Test button for 204
            </button>
            {loading2 ? 'Is Loading' : '...'}
        </div>
    );
}
