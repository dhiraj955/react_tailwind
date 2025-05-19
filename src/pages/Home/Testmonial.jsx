import React from 'react'

function Testmonial() {
  return (
    <section className=" body-font max-w-[1250px] mx-auto">
        <h1 className="text-center pt-20 font-bold text-4xl">Testimonials</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img
            alt="testimonial"
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://randomuser.me/api/portraits/women/68.jpg"
          />
          <p className="leading-relaxed">
            “Shopping at Cartista has been a game changer. The fast delivery and secure checkout made my experience smooth and trustworthy. Highly recommend for tech lovers!”
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            SARAH JONES
          </h2>
          <p className="text-gray-500">Verified Buyer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img
            alt="testimonial"
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://randomuser.me/api/portraits/men/45.jpg"
          />
          <p className="leading-relaxed">
            “Cartista’s customer service is outstanding! They helped me with an easy return and answered all my queries promptly. Great place for hassle-free online shopping.”
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            MICHAEL SMITH
          </h2>
          <p className="text-gray-500">Happy Customer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img
            alt="testimonial"
            className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://randomuser.me/api/portraits/women/72.jpg"
          />
          <p className="leading-relaxed">
            “I love the product variety and discounts on Cartista! The prices are competitive, and the site is easy to navigate. Will definitely shop here again.”
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            EMILY CLARK
          </h2>
          <p className="text-gray-500">Tech Enthusiast</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Testmonial
