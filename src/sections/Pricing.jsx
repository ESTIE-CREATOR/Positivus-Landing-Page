import { Pricings, Questions } from '../Pricing-sections/index.js';

const Pricing = () => {
  return (
    <main className='w-full max-container'>
         
         <section>
           <Pricings />
         </section>
   
         <section>
           <Questions />
         </section>
   
       </main>
  )
}

export default Pricing
