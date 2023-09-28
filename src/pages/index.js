import * as React from 'react'
import Layout from '../components/layout'
//import * as styles from '../styles/home.module.css'

import Hero from '../components/hero/hero'

function IndexPage(){

  return(
    <Layout>
      <div>
        {/* hero section */}
        <div> 
          <Hero/>
        </div>
      </div>
    </Layout>
   
  )
}
export default IndexPage

export const Head = () => <title>Home Page</title>
