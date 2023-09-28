import * as React from 'react'
import Layout from '../components/layout'
import * as styles from '../styles/about.module.css'

export default function About(){
    return (
        <Layout>
            <div>
                <h1 className={styles.header}>About Page</h1>
            </div>
        </Layout>
        
    )
}