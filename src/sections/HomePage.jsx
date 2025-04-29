import { Cases, Contact, Hero, OWP, Services, Team, Testimonials } from '../homePage-sections/index.js';
// import { Cases, Contact, Footer, Hero, OWP, Services, Team, Testimonials } from './homePage-sections/index.js';


const HomePage = () => {
  return (
    <main className='w-full max-container'>
      
      <section>
        <Hero />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <Cases />
      </section>

      <section>
        <OWP />
      </section>

      <section>
        <Team />
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <Contact />
      </section>

    </main>
  )
}

export default HomePage
