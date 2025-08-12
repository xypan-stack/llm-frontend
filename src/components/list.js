import * as React from 'react';
import {Box, Typography, Grid, TextField, Button } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { usePathname, useRouter } from "next/navigation";

export default function LeftList(){
    const router = useRouter();
    const pathname = usePathname();
    const items = ['Mistral LLM','Weather Query'];
    const routes=['mistral','weather']

    const getSelectedIndex = () => {
        const current = pathname.split('/').filter(Boolean).pop()||'';
        const index = routes.indexOf(current);
        return index>=0 ? index : 0;
    }

    React.useEffect(() => {
        const newIndex = getSelectedIndex();
        setSelectedIndex(newIndex);
    }, [pathname]);
    const [selectedIndex, setSelectedIndex] = React.useState(getSelectedIndex);
    const onSelectList = (index) => {
        setSelectedIndex(index);
        console.log(`Selected item: ${items[index]}`);
        router.push(routes[index]);
    };
    return(
        <Box
            sx={{
                display: 'flex',
                backgroundColor: '#f0f4f8',
                flexDirection: 'column',
                position:'relative',
                height: '100vh',
                width: ['200px', '250px', '300px'], 
            }}> 
            <List 
                sx={{ 
                    width: '100%',
                    padding: 1,
                }}>
                {items.map((item, index) => (
                    <ListItemButton
                        key={item}
                        selected={selectedIndex === index}
                        onClick={() => onSelectList(index)}
                        sx={{
                            borderRadius:'15px',
                            "&.Mui-selected":{
                                backgroundColor:'#e1edfa',
                                color:'#e1edfa'
                            },
                            "&:hover":{
                                backgroundColor:'#e1edfa',
                                color:'#1257e0'
                            }
                        }}
                        >
                        <ListItemText 
                            primary={
                                <Typography
                                    sx={{
                                        color:'#080278',
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                    }}>
                                    {item}
                                </Typography>
                            } 
                        />

                    </ListItemButton>
                ))}
            </List>
        </Box>
    )
}