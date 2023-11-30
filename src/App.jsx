import './App.css';
import Product from './components/Product';
import ProductColBuy from './components/ProductColBuy';
import ProductColDesc from './components/ProductColDesc';

function App() {

  return (
    <section className='font-Poppins font-[000] text-sm flex gap-12 justify-center mt-20 m-auto max-w-[1400px]'>
      <Product/>
      <ProductColDesc/>
      <ProductColBuy/>
    </section>
  )
}

export default App;
