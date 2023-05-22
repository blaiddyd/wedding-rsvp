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
         <div className={styles.gifCentral}>
            <Image src="https://media.tenor.com/I8RGJtJhbQ8AAAAi/ranni-ranni-the-witch.gif" height={200} width={200} alt="ranni jammin"/>
        </div>
        <div className={styles.eventDetails}>
            <span>September 23rd, 2023</span>
            <span>Ceremony starts at 4:30pm</span> 
            <a href="https://goo.gl/maps/MUSP7UsSTut2tt6r8" target="_blank" rel="noreferrer">The Guilford Hotel</a>
            <span>
               Save the date and RSVP by letting Ekin/Oskar know <span id={styles.special}>₍ᐢ. ̫ .ᐢ₎</span>
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