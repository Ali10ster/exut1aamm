import React, { useState } from 'react';
import { Avatar,Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

function Noticia({ titulo, fecha, opinion, avatarurl, imageurl, alt }) {
    const [count, setCount] = useState(12);
    const [like, setLike] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    //Cambiar el estado del like
    const handleClickLike = () => {
        if(setLike(!like)){
            setCount((count) => count - 1) 
        }else{
            setCount((count) => count + 1)
        }
        
    }
    const handleClickShare = () => {
        setDialogOpen(true);
    }
    const handleClickWhatsApp = () => {
        console.log("Enviando por Whatsapp...")
    }
    const handleClickTelegram = () => {
        console.log("Enviando por Telegram...")
    }

    return (
        <>
            {/*Se puede hacer el componente card responsive metiendolo en un grid:<Grid item xs={12} sm={6} md={4} lg={3}>*/}

            <Card>
               <Grid container>
               <CardHeader
                    avatar={<Avatar src={avatarurl} />}
                    title={titulo}
                    subheader={fecha}
                />
                <MoreVertIcon></MoreVertIcon>
               </Grid>
                

                <CardMedia
                    component={'img'}
                    height="194"
                    image={imageurl}
                    alt={alt}
                />
                <CardContent style={{ textAlign: 'center' }}>
                    {/* Opinion */}
                    <Typography variant="body2" color="textSecondary" style={{ marginTop: '1em' }}>
                        {opinion}
                    </Typography>
                    
                    {/* Me gusta */}
                    <Grid container justifyContent="flex-start" alignItems="center" style={{ marginTop: '1em' }}>
                        <IconButton onClick={handleClickLike} aria-label="me gusta">
                            <Typography type="number" >{count}</Typography> 
                            {like ? <FavoriteIcon  color="error" /> : <FavoriteBorderIcon />}
                        </IconButton>
                        <ShareIcon onClick={handleClickShare} disabled={like}></ShareIcon>
                    </Grid>
                </CardContent>
            </Card >
            {/* Dialobo */}
          <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
            <DialogTitle>COMPARTIR</DialogTitle>
            <DialogContent>
              <DialogContentText>
                ¿A través de qué plataforma quieres compartir?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <WhatsAppIcon onClick={handleClickWhatsApp}></WhatsAppIcon>
              <TelegramIcon onClick={handleClickTelegram}></TelegramIcon>
            </DialogActions>
          </Dialog>
        </>
    )

};
export default Noticia;