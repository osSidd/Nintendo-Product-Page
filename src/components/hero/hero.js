import * as React from 'react'
import heroImg from '../../../static/hero.jpg'
import * as styles from '../../styles/home.module.css'

export default function Hero(){
    return (
        <div className='hero'>
            <div className={styles.hero}>
                <h1>Dummy Heading Text for the page</h1>
                <p>
                    Product description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button>Button 1</button>
                <button>Button 2</button>
            </div>
            <div className='hero-img'>
                <img src={heroImg} alt = "hero image" />
            </div>
        </div>
    )
}

