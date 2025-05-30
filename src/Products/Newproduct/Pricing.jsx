import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();
    navigate('/newproduct/pricing');
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className="flex flex-col md:flex-row gap-4 md:gap-[100px] items-center my-3 py-5 px-3 md:px-5">
        <div className='items-center lg:ml-32'>
          <h1 className='text-2xl font-bolder text-[#6E39CB] font-[600]'>New Product</h1>
        </div>
        <form className="w-full md:w-auto">
          <div className='relative flex w-full md:w-72'>
            <input
              type="text"
              placeholder='Search anything here...'
              className='border-2 border-gray-200 rounded-[25px] bg-white p-2 w-full pr-10'
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </form>
      </div>

      <div className='flex items-center justify-center mt-5' id='progress-indicator'>
        <div className='flex gap-4 md:gap-[30px] mt-3 items-center flex-wrap'>
          <div className='flex items-center gap-3'>
            <a href="/newproduct/product-info" className='flex items-center gap-3 cursor-pointer'>
              <span className="bg-[#6E39CB] w-[25px] h-[25px] flex items-center justify-center text-center text-white rounded-full">1</span>
              <span className='text-[#6E39CB] font-[600]'>Product Info</span>
            </a> 
          </div>
          <hr className='border w-[60px] md:w-[115px] text-[#E7E7F4]'/>
          <div className='flex items-center gap-3'>
            <a href="/newproduct/media" className='flex items-center gap-3 cursor-pointer'>
              <span className="bg-[#6E39CB] w-[25px] h-[25px] flex items-center justify-center text-center text-white rounded-full">2</span>
              <span className='text-[#6E39CB] font-[600]'>Media</span>
            </a>
          </div>
          <hr className='border w-[60px] md:w-[115px] text-[#E7E7F4]'/>
          <div className='flex items-center gap-3'>
            <a href="/newproduct/social" className='flex items-center gap-3 cursor-pointer'>
              <span className="bg-[#6E39CB] w-[25px] h-[25px] flex items-center justify-center text-center text-white rounded-full">3</span>
              <span className='text-[#6E39CB] font-[600]'>Social</span>
            </a>
          </div>
          <hr className='border w-[60px] md:w-[115px] text-[#E7E7F4]'/>
          <div className='flex items-center gap-3'>
            <span className="bg-[#6E39CB] w-[25px] h-[25px] flex items-center justify-center text-center text-white rounded-full">4</span>
            <span className='text-[#6E39CB] font-[600]'>Pricing</span>
          </div>
        </div>
      </div>
      
      {/* form box */}
      <div className='flex my-5 py-5 items-center justify-center'>
        <div className="w-full max-w-2xl rounded-xl shadow-md py-8 px-3 bg-white">
          <h2 className='text-[18px] font-regular text-dark mb-6 text-center'>
            Pricing
          </h2>
         
          <form className="flex flex-col p-2 md:p-6 w-full relative">
            <div className='flex flex-col md:flex-row gap-3 mb-4 w-full'>
              <div className='flex flex-col gap-1 w-full md:w-1/2 md:max-w-[400px]'>
                <label htmlFor="Price">Price</label>
                <input type="text" placeholder='$100' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
              </div>
              <div className='flex flex-col gap-1 w-full md:w-1/2 md:max-w-[400px]'>
                <label htmlFor="Currency">Currency</label>
                <input type="text" placeholder='USD' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-3 mb-4 w-full'>
              <div className='flex flex-col gap-1 w-full md:w-1/2 md:max-w-[400px]'>
                <label htmlFor="SKU">SKU</label>
                <input type="number" placeholder='829672639' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
              </div>
              <div className='flex flex-col gap-1 w-full md:w-1/2 md:max-w-[400px] mb-4'>
                <label htmlFor="Tags">Tags</label>
                <input type="text" placeholder='In Stock' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
              </div>
            </div>

            <button
              type="submit"
              className='bg-[#6E39CB] text-white font-bold py-2 px-4 rounded-md mt-5 w-full md:w-[100px] md:ml-auto hover:bg-purple-800 transition duration-300 ease-in-out'>
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Pricing