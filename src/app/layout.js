'use client';
import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import LeftList from '../components/list';
import {Box } from '@mui/material';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100vw',
                            height: '100vh',   
                            overflow: 'hidden', 
                        }}
                    >
                        <Box sx={{ flexShrink: 0 }}>
                            <LeftList />
                        </Box>
                        
                        <Box sx={{ 
                            flexGrow: 1,  
                            overflow: 'auto' 
                        }}>
                            {children} 
                        </Box>
                    </Box>
                </ThemeProvider>
            </body>
        </html>
    );
}
