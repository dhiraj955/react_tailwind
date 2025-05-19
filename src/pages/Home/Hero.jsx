import { NavLink } from "react-router"



export function Hero({searchQuery, setSearchQuery}) {
  return (
  <div className='bg-gray-100  relative z-[-1]'>
      <div className='relative max-w-full mx-auto  pt-28 bg-cover bg-center h-[500px] md:h-screen ' style={{backgroundImage: `url("https://blog.saginfotech.com/wp-content/uploads/2017/06/gst-electronics-discount.jpg")`, backgroundPosition:'center'}}>
        <div className='absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
            <div className='text-center text-white px-4'>
                <h1 className='text-3xl md:w-[80%] mx-auto leading-tight md:text-5xl lg:text-5xl font-bold mb-4'>"Welcome to Cartisto — Where Every Product You Love Comes Together in One Seamless Carting Experience."</h1>
                <p className='text-lg md:text-xl mb-6'>Discover the latest tech innovations with unbeatable prices and free shipping on all orders.</p>
              <input
              className="w-full max-w-md mx-auto bg-blue-100 px-4 py-2 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              
            />
            <br />
                <NavLink to="/products"><button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Shop Now</button></NavLink>
            </div>
        </div>
      </div>
    </div>


   

  )}

export default Hero
