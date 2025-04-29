import { Cases, Hero, SEO, OS} from '../Services-sections/index.js';

const Services = () => {
  return (
    <main className='w-full max-container'>
         
         <section>
           <Hero />
         </section>
   
         <section>
           <SEO />
         </section>
   
         <section>
           <Cases />
         </section>
   
         <section>
           <OS />
         </section>
   
       </main>
  )
}

export default Services
