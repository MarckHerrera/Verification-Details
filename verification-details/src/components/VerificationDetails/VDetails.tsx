import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const VDetalles = () => {

    return (
        <React.StrictMode>
            <Container component="main" maxWidth="xl">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: '10vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
                    <br />
                    <Typography component="h1" variant="h5" sx={{ color: '#464E47' }}>
                        Nombre de Usuario
                    </Typography>
                    <Typography component="h1" variant="h6" sx={{ color: '#879488' }}>
                        Documento de identificación
                    </Typography>

                    <ImageList cols={5} rowHeight={210}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} sx={{ alignItems: 'center' }}>
                                <img
                                    src={`${item.img}?w=160&h=160&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=160&h=160&fit=crop&auto=format&dpr=2 2px`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    position="below"

                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <hr />

                    <Box component="form" sx={{ mt: 1, }}>
                        <TextField id="outlined-basic" label="Deja un mensaje al conductor (Opcional)" variant="outlined" fullWidth margin="normal" />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="text"
                            id="password"
                            /* onChange={handleInputChange} */
                            autoComplete="current-password"
                        />
                        <ButtonGroup size="large" variant="outlined" aria-label="large button group" fullWidth >
                            <Button endIcon={<HighlightOffIcon />}>Denegar</Button>
                            <Button endIcon={<CheckCircleOutlineIcon />} variant="contained" >Aprobar</Button>
                        </ButtonGroup>

                    </Box>
                </Box>
            </Container>
        </React.StrictMode>
    );
}


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },

];

export default VDetalles;