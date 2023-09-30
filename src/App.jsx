import Navbar from './components/navbar'
import Hero from './components/hero/hero'
import Services from './components/services/services'
import Testimonial from './components/testimonial/testimonial'
import Signup from './components/signup/signup'
import Footer from './components/footer'

function App(){

  return(
      <div>
        {/* navbar */}
        <Navbar/>

        {/* hero section */}
        <Hero/>
        
        {/* services section */}
        <Services/>
        
        {/* testimonial section */}
        <Testimonial/>
        
        {/* sign up section */}
        <Signup/>
        
        {/* footer */}
        <Footer/>
      </div>
   
  )
}
export default App
