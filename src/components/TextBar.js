'use client';
import { Box,  TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function TextBar({ handleQueryChange, handleSubmit }) {


    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '400px',
                padding: 2,
                boxShadow: 3,
                borderRadius: 2,
            }}>
            <TextField 
                variant="standard" 
                sx={{
                    marginTop: 1, 
                    width: '300px',
                    '& .MuiInput-underline:before': {
                        borderBottom: '1px solid #75c5fa',
                    }  ,
                    '& .MuiInput-underline:hover:before': {
                        borderBottom: '1px solid #5aa5fa',
                    },
                    '& .MuiInput-underline:focus': {
                        borderBottom: '2px solid #75c5fa',  
                    },
                    '& .MuiInput-underline:after': {
                        borderBottom: '2px solid #75c5fa',
                    }
                
                }} 
                onChange={handleQueryChange}
            />
            <SendIcon 
                sx={{
                    cursor: 'pointer', 
                    marginTop: 1, 
                    marginLeft: 1,
                    color: '#75c5fa',
                    '&:hover': {                                
                        color:'#5aa5fa'
                    },
                }}
                onClick={handleSubmit}
            />
        </Box>
    )


}