import { Hero, Main, Insights } from "../Blog-sections"


const Blog = () => {
  return (
       <main className='w-full max-container'>
            
            <section>
              <Hero />
            </section>
      
            <section>
              <Main />
            </section>
      
            <section>
              <Insights  />
            </section>
      
          </main>
  )
}

export default Blog
