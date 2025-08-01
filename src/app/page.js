'use client';
import { Box,  Typography } from '@mui/material';

export default function Home(){


    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
            }}>
            <Typography 
                variant="h4" 
                sx={{ 
                    color: '#080278' ,
                    padding: 2,
                }}>
                Welcome to the LLM Interface <br />
                Click on the left to start
            </Typography>
        </Box>
    )


}