import Description from "./components/description/description";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import OtherProducts from "./components/otherProducts/otherProducts";
import Specifications from "./components/specs/specification";

export default function App(){
  console.log('hi')
  return (
    <div className=''>
      <header>
        <Navbar/>
        <Hero/>
      </header>
      <main>
        <Description/>
        <Specifications/>
        <OtherProducts/>
      </main>
      <Footer/>
    </div>
  )
}