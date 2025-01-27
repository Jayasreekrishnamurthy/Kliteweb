import React from "react";
import styles from "../Footer/Footer.module.css";

export const Footer = () => {
    return (
        <div className={styles.footer1_mainDiv}>
           
            <div className={styles.footer1_bottomDiv}>
                <div className={styles.footer1_bottomDiv_font}>
                    Terms and Privacy Notice
                </div>
                <div className={styles.footer1_bottomDiv_font}>
                    Send us feedback
                </div>
                <div className={styles.footer1_bottomDiv_font}>Help</div>
                <div className={styles.footer1_bottomDiv_4}>
                    © 1996-2021, Inc. or its affiliates
                </div>
            </div>
        </div>
    );

}; 
