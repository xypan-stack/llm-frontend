'use client';
import { Box, Typography, Paper } from '@mui/material';

export default function ChatBubble({ message, type }) {
    // type can be 'query' (user) or 'response' (AI)
    const isQuery = type === 'query';
    
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: isQuery ? 'flex-end' : 'flex-start',
                mb: 2,
                width: '100%',
            }}
        >
            <Paper
                elevation={1}
                sx={{
                    p: 2,
                    maxWidth: '70%',
                    borderRadius: 2,
                    // Green for user, white for AI
                    backgroundColor: isQuery ? '#DCF8C6' : '#FFFFFF', 
                    color: '#000000',
                    position: 'relative',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: 0,
                        height: 0,
                        border: '8px solid transparent',
                        borderTopColor: isQuery ? '#DCF8C6' : '#FFFFFF',
                        borderBottom: 0,
                        [isQuery ? 'right' : 'left']: 10,
                        bottom: -8,
                        marginLeft: -8,
                    },
                }}
                > 
                <Typography variant="body1" sx={{ wordBreak: 'break-word' }}>
                    {message}
                </Typography>
            </Paper>
        </Box>
    );
}