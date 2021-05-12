import React from 'react'
import './VideoFooter.css'
import Ticker from 'react-ticker'
import { Avatar, Button } from '@material-ui/core';

import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


import VisibilityIcon from '@material-ui/icons/Visibility';

export default function VideoFooter({
    channel, avatarSrc, song, likeCount, shareCount
}) {
    return (
        <div className="videoFooter">
             <div className="videoFooter__text">
                <Avatar alt="Remy Sharp" src={avatarSrc} />
                <h3> {channel} • <Button> FOLLOW </Button> </h3> 
             </div>

            <div className="videoFooter__ticker">

                <MusicNoteIcon  className="videoFooter__icon"/>

                <Ticker mode='smooth'>
                {({ index }) => (
                    <>
                       <h1> {song}</h1> 
                    </>
                )}
            </Ticker>

            </div>

            <div className="videoFooter__actions">

                <div className="videoFooter__actionsLeft">
                <FavoriteIcon />
                <ModeCommentIcon />
                <SendIcon />
                <MoreHorizIcon />


                </div>
                

                <div className="videoFooter__actionsRight">
                    <div className="videoFooter__stat">
                        <FavoriteIcon />
                        <p>{likeCount}</p>        
                    </div>

                    <div className="videoFooter__stat">
                        <ModeCommentIcon />
                        <p>{shareCount}</p>  
                    </div>                                       
                </div>


            </div>
            
            
            
        </div>
    )
}
