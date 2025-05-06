import { homepageIllustration, Team6 } from "../positivus-assets/images";

const Hero = () => {
  return (
    <section className="w-full min-h-screen max-container md:padding-x px-4 mt-[50px] ">
      <div className="flex flex-col">
      <div className="flex flex-1 lg:flex-row lg:justify-between items-center pt-[20px] bg-light-gray lg:rounded-[45px] lg:pt-[60px] pb-[80px] px-[70px] gap-4 lg:border-rich-black lg:border-[1px] lg:border-b-[4px] max-lg:flex-col-reverse">
      <img src={homepageIllustration} alt="Illustration" width={450} height={400}  className=" flex flex-1 object-contain bg-light-gray" />
      <div className="flex flex-col xl:w-[531px] xl:h-[481] gap-[35px]">
        <p className="bg-[#e8e8e8] text-[#8f8f8f] rounded-[5px] font-grotesk text-[16px] w-[170px] flex justify-center items-center ">Marketing Strategies</p>
        <h1 className="text-[60px] font-bold font-grotesk ">PPC vs. Organic <br /> Marketing: Which One Is Right for Your Business?</h1>
        <p className="text-[20px] font-grotesk leading-[28px] ">
        PPC and organic marketing each offer unique benefits for driving traffic and growing your business. Discover which strategy aligns best with your goals and how to strike the perfect balance.</p>
      </div>
      </div>

      <div className="flex items-center gap-4 mb-8 sm:mb-12 mt-[80px] ">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={Team6} alt="" />
          </div>
          <div>
            <h5 className="text-[18px] sm:text-[20px] font-grotesk font-medium text-rich-black">
              Sarah Kim
            </h5>
            <p className="text-[14px] sm:text-[16px] font-grotesk text-rich-black">
              Content Creator
            </p>
          </div>
          <span className="ml-auto text-[14px] sm:text-[16px] font-grotesk text-rich-black">
            A A
          </span>
        </div>

        <div className="w-full h-[2px] bg-rich-black mb-[30px] "></div>

        <div className="max-lg:px-[150px] ">
        {/* Introduction */}
        <div className="mb-8 sm:mb-12">
          <p className="text-[16px] sm:text-[22px] font-semibold font-grotesk text-rich-black leading-1">
            In the ever-evolving digital landscape, businesses are faced with an
            important question: should they invest in pay-per-click (PPC)
            advertising or focus on organic marketing strategies? While both
            approaches have their merits, choosing the right one depends on your
            goals, budget, and timeline. Let’s dive into the strengths,
            challenges, and real-world applications of PPC and organic marketing
            to help you make an informed decision.
          </p>
        </div>

        {/* The Challenge of Standing Out Online */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-[24px] sm:text-[30px] font-grotesk font-medium text-rich-black mb-4">
            The Challenge of Standing Out Online
          </h2>
          <p className="text-[16px] sm:text-[18px] font-grotesk text-rich-black">
            Every day, millions of businesses compete for visibility online,
            making it increasingly difficult to capture the attention of potential
            customers. Organic search results are highly sought after, but
            earning a top spot on Google takes time and consistent effort. Meanwhile,
            PPC ads promise instant visibility, but can quickly drain your budget if
            not executed effectively. For small businesses with limited resources,
            this dilemma can feel like an impossible balancing act. Do you play
            the long game with organic strategies or opt for quick wins with PPC?
          </p>
        </div>

        {/* Comparing PPC and Organic Marketing */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-[24px] sm:text-[30px] font-grotesk font-medium text-rich-black mb-4">
            Comparing PPC and Organic Marketing
          </h2>
          <p className="text-[16px] sm:text-[18px] font-grotesk text-rich-black">
            Pay-per-click (PPC) and organic marketing each offer distinct advantages
            and challenges, making them effective for different business needs. PPC
            is designed to deliver immediate results by securing top placements on
            search engines and social media platforms, providing businesses with
            instant visibility, flexibility to start small and scale as needed. However,
            PPC can become expensive quickly, particularly in competitive industries,
            and its results are short-lived since traffic stops when the campaign ends.
            In contrast, organic marketing focuses on building a strong, sustainable
            presence through strategies like search engine optimization (SEO) and
            content creation. This approach builds trust and credibility over time,
            delivering consistent traffic without the need for ongoing ad spend. While
            it requires long-term benefits that make it a valuable strategy for sustained
            growth.
          </p>
        </div>

        {/* Striking the Right Balance */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-[24px] sm:text-[30px] font-grotesk font-medium text-rich-black mb-4">
            Striking the Right Balance
          </h2>
          <p className="text-[16px] sm:text-[18px] font-grotesk text-rich-black mb-4">
            “PPC and organic marketing aren’t rivals—they’re teammates. The best
            strategies combine both to create a holistic approach to growth,” says
            a digital marketing expert.
          </p>
          <p className="text-[16px] sm:text-[18px] font-grotesk text-rich-black">
            Businesses might use PPC to generate quick traffic for a new product launch
            while building long-term organic authority through SEO and blogging. Combining
            these strategies ensures you’re reaching your audience where they are, whether
            through paid ads or organic search. For small businesses with limited resources,
            this dilemma can feel like an impossible balancing act. Do you play the long
            game with organic strategies or opt for quick wins with PPC?
          </p>
        </div>

        {/* By the Numbers: Facts About PPC and Organic Marketing */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-[24px] sm:text-[30px] font-grotesk font-medium text-rich-black mb-4">
            By the Numbers: Facts About PPC and Organic Marketing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border-[1px] border-rich-black rounded-[45px] p-6 sm:p-8">
              <p className="text-[16px] sm:text-[18px] font-grotesk text-rich-black">
                Businesses earn an average of <br />
                <span className="font-bold">$2 for every $1 spent</span> <br /> on
                PPC advertising.
              </p>
            </div>
            <div className="bg-lime-green border-[1px] border-rich-black rounded-[45px] p-6 sm:p-8">
              <p className="text-[16px] sm:text-[18px] font-grotesk text-rich-black">
                <span className="font-bold">41% of clicks</span> on search engines
                go to the top three organic results, showing the importance of
                ranking highly.
              </p>
            </div>
            <div className="bg-white border-[1px] border-rich-black rounded-[45px] p-6 sm:p-8">
              <p className="text-[16px] sm:text-[18px] font-grotesk text-rich-black">
                Content marketing costs <br />
                <span className="font-bold">62% less than paid ads</span> <br /> but
                generates <span className="font-bold">3x as many leads</span>.
              </p>
            </div>
            <div className="bg-rich-black border-[1px] border-rich-black rounded-[45px] p-6 sm:p-8">
              <p className="text-[16px] sm:text-[18px] font-grotesk text-white">
                Organic search drives <br />
                <span className="font-bold">53% of all website traffic,</span> <br /> making
                it the largest single source of traffic.
              </p>
            </div>
          </div>
        </div>

        {/* Real-World Examples */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-[24px] sm:text-[30px] font-grotesk font-medium text-rich-black mb-4">
            Real-World Examples
          </h2>
          <p className="text-[16px] sm:text-[18px] font-grotesk text-rich-black">
            PPC and organic marketing have proven effective in different scenarios, and
            real-world examples highlight their impact. A local restaurant, for instance,
            leveraged Google Ads to target the search term “best Italian food near me,” which
            led to a remarkable 140% increase in reservations within just two weeks. Similarly,
            a B2B SaaS company focused on organic marketing by investing in SEO and blog
            content. This strategic approach helped them rank for competitive keywords and
            boosted their website traffic by 200% over six months. Some businesses find success
            by combining both strategies, like an e-commerce retailer that launched a targeted
            PPC campaign for seasonal sales while simultaneously optimizing product pages for
            organic search. This hybrid approach resulted in a 50% higher return on investment
            compared to relying solely on PPC advertising.
          </p>
        </div>

        <div className={`mb-8 sm:mb-12 `}>
          <h2 className={`text-[24px] sm:text-[30px] font-grotesk font-medium text-rich-black mb-4 `}>
            Key Takeaways for Your Marketing Strategy
          </h2>
          <ul className={`list-disc pl-6 text-[16px] sm:text-[18px] font-grotesk text-rich-black `}>
            <li className={`mb-2 font-grotesk`}>PPC is ideal for short-term goals, like promoting sales, events, or new products.</li>
            <li className={`mb-2 font-grotesk`}>Organic marketing is better for long-term growth, building trust, and creating lasting customer relationships.</li>
            <li className={`mb-2 font-grotesk`}>A hybrid approach offers the best of both worlds, balancing quick wins with sustainable development.</li>
          </ul>
        </div>

        {/* Choosing the Best Strategy for You */}
        <div>
          <h2 className={`text-[24px] sm:text-[30px] font-grotesk font-medium text-rich-black mb-4 `}>
            Choosing the Best Strategy for You
          </h2>
          <p className={`text-[16px] sm:text-[18px] font-grotesk text-rich-black mb-4`}>
            Ultimately, the choice between PPC and organic marketing depends on your specific needs. If you need fast results, PPC can be a game-changer. On the other hand, if you’re focused on building a loyal audience and maintaining a steady flow of leads, organic marketing is your best bet.
          </p>
          <p className={`text-[16px] sm:text-[18px] font-grotesk text-rich-black`}>
            By understanding the strengths and limitations of both strategies, you can create a marketing plan that aligns with your goals, budget, and target audience. Ready to take the next step? Start with a strategy that drives results today!
          </p>
        </div>

        </div>
      
    </div>
    </section>
  )
}

export default Hero


import React from "react";

