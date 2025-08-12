'use client';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

import TextBar from '../../components/TextBar';
import ChatBubble from '../../components/ChatBubble';

export default function MistralPage(){
    const [query, setQuery] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const chatContainerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [chatHistory]);

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async () => {
        if (!query.trim() || isLoading) return; // Prevent empty queries
        const userMessage = { text: query, type: 'query' };
        setChatHistory(prev => [...prev, userMessage]);

        setChatHistory(prev => [...prev,{ text: 'Loading...', type: 'response' }]);
        setIsLoading(true);
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/weather/get-weather', { query: query });
            console.log(res.data);
            setQuery(''); // Clear input after submission
            
            let displayText = '';
            
            if (res.data && typeof res.data === 'object') {
                const { location, temperature, description, humidity, wind_speed } = res.data;
                displayText = `Location: ${location || 'N/A'}\n\n`;
                displayText += `Temperature: ${temperature || 'N/A'}°C\n\n`;
                displayText += `Description: ${description || 'N/A'}\n\n`;
                displayText += `Humidity: ${humidity || 'N/A'}%\n\n`;   
                displayText += `Wind Speed: ${wind_speed || 'N/A'} m/s\n\n`; 

            } else {
                displayText = String(res.data);
            }
            
            setChatHistory(prev => prev.filter(msg => msg.text !== 'Loading...'));
            const aiMessage = {text: displayText, type: 'response'};
            setChatHistory(prev => [...prev, aiMessage]);
            
        } catch (error) {
            console.error('Error fetching response:', error);
            const errorMessage = { text: "Sorry, there was an error processing your request.", type: 'response' };
            setChatHistory(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',  
                position: 'relative',     
                height: '100%',
                width: '100%',
                pb:'120px'
            }}>

            <Box
                ref={chatContainerRef}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                    padding: 2,
                    height: '100%',
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                }}>
                {chatHistory.map((chat, index) => (
                    <ChatBubble 
                        key={index} 
                        message={chat.text} 
                        type={chat.type} 
                    />
                ))}
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    bottom: '50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width:' 80%',
                }}
            >
                <TextBar
                    value={query}
                    handleQueryChange={handleQueryChange}
                    handleSubmit={handleSubmit}
                    disabled={isLoading} 
                />
            </Box>
        </Box>
    )
}