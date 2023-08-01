import { ArrowBack, ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import '../watch/watch.css'

const watch = () => {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className="video" autoPlay prograss controls src='https://player.vimeo.com/progressive_redirect/playback/845907787/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=4959e9d81fda39904ddec1f332b88086b9f0090d95c7f7a3223e0fd5b77af5a8' />
        </div>
    )
}

export default watch