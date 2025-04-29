import { Awards, Core, Hero, JOT, Impact, Journey  } from '../AboutUsPage-sections/index.js';
// import { Awards, Core, Hero, JOT, Impact, Journey  } from '../AboutUsPage-sections/index.js';

const About = () => {
  return (
       <main className='w-full max-container'>
         
         <section>
           <Hero />
         </section>
   
         <section>
           <Impact />
         </section>
   
         <section>
           <Journey />
         </section>
   
         <section>
           <Core />
         </section>
   
         <section>
           <Awards />
         </section>
   
         <section>
           <JOT />
         </section>
   
       </main>
  )
}

export default About
