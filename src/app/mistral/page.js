'use client';
import axios from 'axios';
import { useState } from 'react';
import { Box } from '@mui/material';

import TextBar from '../../components/TextBar';

export default function MistralPage(){
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleQueryChange = (event) => {
        console.log(event.target.value);
        setQuery(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/llm/generate-response', { request: query });
            
            console.log(res.data);
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };

    return(
        <Box
            sx={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                height:'100%',
                width:'100%',
            }}>
                <TextBar
                    handleQueryChange={handleQueryChange}
                    handleSubmit={handleSubmit}
                />

        </Box>
    )

}