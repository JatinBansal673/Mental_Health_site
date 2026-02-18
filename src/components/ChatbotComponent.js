import React, { useState } from 'react';
import axios from 'axios';


const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const api_key=process.env.REACT_APP_GROQ_API_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const prompt = userInput || "What is depression?";
            const res = await axios.post('https://api.groq.com/openai/v1/chat/completions', {
                messages: [
                    { role: 'user', content: `${prompt} (Please provide a short and accurate answer)` },
                ],
                model: 'llama-3.1-8b-instant',

            }, {
                headers: {
                    'Authorization': `Bearer ${api_key}`,
                    'Content-Type': 'application/json',
                },
            });

            console.log(res.data); // Log the entire response

            // Check the structure of the response
            if (res.data.choices && res.data.choices[0]) {
                setResponse(res.data.choices[0].message.content); // Ensure this is a string
            } else {
                setError("Unexpected response structure");
            }
            setError(''); // Clear any previous error
        } catch (err) {
            console.error("Error fetching response:", err);
            const errorMessage = err.response ? err.response.data : "Network error";
            setError(errorMessage); // Ensure this is a string
        }
    };

    return (
        <div className='flex flex-col gap-3'>
            <h1>Chatbot</h1>
            {response && (
                <div>
                    <strong>Response:</strong> {String(response)} {/* Ensure this is a string */}
                </div>
            )}
            <form onSubmit={handleSubmit} className='flex gap-3 max-h-6'>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask something..."
                    required className='border-2 rounded-xl p-2'
                />
                <button type="submit" className='py-0 max-h-8 m-0 bg-blue-700 border-2 border-transparent rounded-full :hover h-[24px] w-[76.19px]'>Send</button>
            </form>
            
            {error && <div className="error">{String(error)}</div>} {/* Ensure this is a string */}
        </div>
    );
};

export default Chatbot;