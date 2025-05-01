import { Testimonials, Hero, Success } from '../useCases-sections/index.js';

const Cases = () => {
  return (
    <main className='w-full max-container'>
         
         <section>
           <Hero />
         </section>
   
         <section>
           <Success />
         </section>
   
         <section>
           <Testimonials  />
         </section>
   
       </main>
  )
}

export default Cases
