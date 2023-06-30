import React from 'react';
import './styles.css';

const year = new Date();
const yrs=year.getFullYear();

export default function Footer(){
    return <footer>
            <p>Copyright@{yrs}</p>
        </footer>
}