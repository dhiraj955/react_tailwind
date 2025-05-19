import React from 'react'

function Service() {
  return (
    <div className="max-w-4xl mx-auto px-5 mt-16">
  <div className="text-center">
    <h2 className="font-semibold text-3xl">Why Shop With Us?</h2>
    <p className="max-w-md mx-auto mt-2 text-gray-500">
      Discover a store built for simplicity, speed, and satisfaction. We provide more than products — we offer an experience.
    </p>
  </div>
  <div className="grid md:grid-cols-2 gap-10 mt-10">
    <div className="flex gap-4 items-start">
      <span className="text-green-600 bg-green-500/10 p-3 rounded-full">
        {/* Icon 1: Fast Shipping */}
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </span>
      <div>
        <h3 className="font-semibold text-xl">Fast & Free Shipping</h3>
        <p className="mt-1 text-gray-500">
          Get your orders delivered swiftly with our express and free shipping on all items — no minimum required!
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <span className="text-blue-600 bg-blue-500/10 p-3 rounded-full">
        {/* Icon 2: Secure Checkout */}
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1C9.239 1 7 3.239 7 6v2H5c-1.103 0-2 .897-2 2v10a2.006 2.006 0 002 2h14a2.006 2.006 0 002-2V10c0-1.103-.897-2-2-2h-2V6c0-2.761-2.239-5-5-5zM9 6c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V6zm10 14H5V10h14v10z" />
        </svg>
      </span>
      <div>
        <h3 className="font-semibold text-xl">Secure Checkout</h3>
        <p className="mt-1 text-gray-500">
          Shop confidently with our end-to-end encrypted payment system — your security is our top priority.
        </p>
      </div>
    </div>

    <div className="flex gap-4 items-start">
      <span className="text-purple-600 bg-purple-500/10 p-3 rounded-full">
        {/* Icon 3: 24/7 Support */}
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 00-10 10v2a6 6 0 006 6h8a6 6 0 006-6v-2a10 10 0 00-10-10zm-1 14v-2h2v2h-2zm0-4V7h2v5h-2z" />
        </svg>
      </span>
      <div>
        <h3 className="font-semibold text-xl">24/7 Customer Support</h3>
        <p className="mt-1 text-gray-500">
          Questions? Problems? Our team is here for you around the clock — whenever you need us.
        </p>
      </div>
    </div>
  </div>
</div>


  )
}

export default Service
