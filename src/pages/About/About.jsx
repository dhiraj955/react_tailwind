import React from "react";

function About() {
  return (
    <section className="text-gray-600 body-font max-w-[1250px] mx-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-blue-500" />
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Empowering Your Digital Life
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              At Cartista, we believe technology should be accessible, reliable, and exciting. 
              From cutting-edge gadgets to daily-use tech essentials, our goal is to power your lifestyle with innovation, quality, and trust.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {/* Vision */}
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="Zaptro Vision"
                className="object-cover object-center h-full w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DE0nDSzTrcSBdJVCd864klxVw148jJ1XTw&s"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Our Vision
            </h2>
            <p className="text-base leading-relaxed mt-2">
              To become the most trusted online destination for electronics, delivering not just products, but powerful experiences.
            </p>
          </div>

          {/* What We Offer */}
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="Zaptro Products"
                className="object-cover object-center h-full w-full"
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              What We Offer
            </h2>
            <p className="text-base leading-relaxed mt-2">
              From smart home devices to personal tech accessories, we offer premium products backed by warranties, fast delivery, and 24/7 support.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="Customer Support"
                className="object-cover object-center h-full w-full"
                src="https://knowmax-ai-website.s3.amazonaws.com/wp-content/uploads/2024/09/12133025/Ecommerce-customer-service.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Why Cartista?
            </h2>
            <p className="text-base leading-relaxed mt-2">
              We combine quality products, expert advice, and personalized service to give you a seamless shopping experience from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
