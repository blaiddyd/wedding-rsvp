'use client';

import React from "react";
import styles from "./content-area.module.css"

export const MainContent = () => {
    return <div className={styles.mainContent}>
         <div className={styles.gifCentral}>
            <img src="https://media.tenor.com/I8RGJtJhbQ8AAAAi/ranni-ranni-the-witch.gif" height="200px" width="200px" alt="ranni jammin"/>
        </div>
        <div className={styles.eventDetails}>
            <span>September 23rd, 2023</span>
            <span>Ceremony starts at 4:30pm</span>
            <a href="https://goo.gl/maps/MUSP7UsSTut2tt6r8" target="_blank" rel="noreferrer">The Guilford Hotel</a>
            <span>
                RSVP with
            </span>
            <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NG1sdnI1Y3B0OTJmOWNzNGxvZWgxYXVsMnIgNzZlNTA4MjAwZDBjZGRlOGZkNmVkZWM1NzVhMjM4MjAyNjlkYjRlODdjNGU1YzM4MDkzMTRmZGQxNDQ3NmY5ZUBn&amp;tmsrc=76e508200d0cdde8fd6edec575a23820269db4e87c4e5c3809314fdd14476f9e%40group.calendar.google.com" rel="noreferrer">
                <img src="https://www.google.com/calendar/images/ext/gc_button1_en.gif" alt="calendar invite" />
            </a>
        </div>
        <div className={styles.gifCentral}>
            <img src="https://media.tenor.com/I8RGJtJhbQ8AAAAi/ranni-ranni-the-witch.gif" height="200px" width="200px" alt="ranni jammin"/>
        </div>
    </div>
}