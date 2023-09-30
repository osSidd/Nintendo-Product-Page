import * as React from 'react'
import Layout from '../components/layout'
//import * as styles from '../styles/home.module.css'

import Hero from '../components/hero/hero'
import Services from '../components/services/services'
import Testimonial from '../components/testimonial/testimonial'
import Signup from '../components/signup/signup'

function IndexPage(){

  return(
    <Layout>
      <div>
        {/* hero section */}
        <Hero/>
        {/* services section */}
        <Services/>
        {/* testimonial section */}
        <Testimonial/>
        {/* sign up section */}
        <Signup/>
      </div>
    </Layout>
   
  )
}
export default IndexPage

export const Head = () => <title>Home Page</title>
