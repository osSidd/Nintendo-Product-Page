import Description from "./components/description/description";
import Footer from "./components/footer/footer";
import OtherProducts from "./components/otherProducts/otherProducts";
import Specifications from "./components/specs/specification";

export default function App(){
  console.log('hi')
  return (
    <div className=''>
      <main>
        <Description/>
        <Specifications/>
        <OtherProducts/>
      </main>
      <Footer/>
    </div>
  )
}