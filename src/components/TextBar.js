'use client';
import { Box,  TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function TextBar({
    value, 
    handleQueryChange, 
    handleSubmit, 
    disabled=false }
){
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !disabled) {
            handleSubmit();
        }
    };

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
                opacity: disabled ? 0.5 : 1,
            }}>
            <TextField 
                value={value}
                variant="standard" 
                disabled={disabled}
                sx={{
                    marginTop: 1, 
                    width: '300px',
                    '& .MuiInput-underline:before': {
                        borderBottom: '1px solid #75c5fa',
                    }  ,
                    '& .MuiInput-underline:hover:before': {
                        borderBottom: '2px solid #75c5fa',
                    },
                    '& .MuiInput-underline:hover:after': {
                        borderBottom: '2px solid #75c5fa',
                    },
                    '& .MuiInput-underline:focus': {
                        borderBottom: '2px solid #75c5fa',  
                    },
                    '& .MuiInput-underline:after': {
                        borderBottom: '2px solid #75c5fa',
                    }
                
                }} 
                onChange={handleQueryChange}
                onKeyDown={handleKeyPress }
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
                onClick={disabled? undefined: handleSubmit}
            />
        </Box>
    )


}