'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./content-area.module.css"

export const MainContent = () => {
   const [renderMoreRanni, setRenderMoreRanni] = useState(false); 
    useEffect(() => {
        if (window && window.innerWidth >= 600 ) {
            setRenderMoreRanni(true);
        }
    }, []);

    return <div className={styles.mainContent}>
        <div className={styles.eventMenu}>
            <a href="https://forms.gle/LSBJj7z3SyG5Cemp9" target="_blank" rel="noreferrer">RSVP Form</a>
            <a href="" target="_blank" rel="noreferrer">Gift Registry</a>
            <a href="https://open.spotify.com/playlist/25n2C4GAuCm3GI2cSrThOo?si=e41b712bba5a4ce5&pt=8b49375ed9ea99d059e2214dc9706610" target="_blank" rel="noreferrer">Spotify Playlist</a>
        </div>
         <div className={styles.gifCentral}>
            <Image src="https://media.tenor.com/I8RGJtJhbQ8AAAAi/ranni-ranni-the-witch.gif" height={200} width={200} alt="ranni jammin"/>
        </div>
        <div className={styles.eventDetails}>
            <span>September 23rd, 2023</span>
            <span>Ceremony starts at 4:30pm</span> 
            <span>Dress code is semi-formal or your best Elden Ring couture!</span>
            <a href="https://goo.gl/maps/MUSP7UsSTut2tt6r8" target="_blank" rel="noreferrer">The Guilford Hotel</a>
            <span>
               Save the date and RSVP by filling out the <a href="https://forms.gle/LSBJj7z3SyG5Cemp9" target="_blank" rel="noreferrer">RSVP Form</a> <span id={styles.special}>₍ᐢ. ̫ .ᐢ₎</span>
            </span>
        </div>
      
        {
            renderMoreRanni &&
            <div className={styles.gifCentral}>
                <Image src="https://media.tenor.com/I8RGJtJhbQ8AAAAi/ranni-ranni-the-witch.gif" height={200} width={200} alt="ranni jammin"/>
            </div>
        }
    </div>
}