import Footer from "./components/footer/footer";
import OtherProducts from "./components/otherProducts/otherProducts";

export default function App(){
  console.log('hi')
  return (
    <div className=''>
      <main>
        <OtherProducts/>
      </main>
      <Footer/>
    </div>
  )
}