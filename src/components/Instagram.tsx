import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';

const Instagram = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe src="https://www.instagram.com/theawakenedsoulsconnection/embed" width="400" height="480" frameBorder="0" scrolling="no" allowTransparency></iframe>

        <InstagramEmbed url="https://www.instagram.com/theawakenedsoulsconnection/" width={328}  />
    </div>
  )
}

export default Instagram