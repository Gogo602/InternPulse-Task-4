import React from 'react'

const Editproduct = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className="flex flex-col md:flex-row gap-4 md:gap-[100px] items-center my-3 py-5 px-3 md:px-5">
            <div className='items-center lg:ml-32'>
                <h1 className='text-2xl font-bolder text-[#6E39CB] font-[600] '>Edit Product</h1>
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
      
      {/* form box */}
        <div className="bg-white rounded-md w-[90%] md:w-[80%] mx-auto p-5 shadow-lg">
            <div className='flex py-4 items-center justify-center'>
                <div className="w-full max-w-3xl rounded-xl shadow-md py-8 px-3 bg-white border-1 border-gray-200">
                    <h2 className='text-[18px] font-regular text-dark mb-6 text-center'>
                        Product Information
                    </h2>
                    
                    <form className="flex flex-col p-2 md:p-6 w-full">
                        <div className='flex flex-col md:flex-row gap-3 mb-4 w-full'>
                            <div className='flex flex-col gap-1 w-full md:w-1/2'>
                                <label htmlFor="Name">Name</label>
                                <input type="text" placeholder='Off-white' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                            </div>
                            <div className='flex flex-col gap-1 w-full md:w-1/2'>
                                <label htmlFor="weight">Weight</label>
                                <input type="text" placeholder='42' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-3 mb-4 w-full'>
                            <div className='flex flex-col gap-1 w-full md:w-1/2'>
                                <label htmlFor="sizes">Sizes</label>
                                <input type="number" placeholder='Large' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                            </div>
                            <div className='flex flex-col gap-1 w-full md:w-1/2'>
                                <label htmlFor="categoryt">Category</label>
                                <input type="text" placeholder='Clothing' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <div className='flex flex-col gap-1 w-full md:w-1/2'>
                                <label htmlFor="description">Description</label>
                                <input type="text" placeholder='Some initial bold text' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                            </div>
                        </div>
                    </form>          
                </div>
            </div>

            <div className='flex py-4 items-center justify-center'>
                <div className="w-full max-w-3xl rounded-xl shadow-md py-8 px-3 bg-white  border-1 border-gray-200">
                    <h2 className='text-[18px] font-regular text-dark mb-6 text-center'>
                        Social
                    </h2>
                
                    <form className="flex flex-col p-2 md:p-6 w-full relative">
                        <div className='flex flex-col md:flex-row gap-3 mb-4 w-full'>
                            <div className='flex flex-col gap-1 w-full md:w-1/2 md:max-w-[400px]'>
                                <label htmlFor="Facebook">Facebook Account</label>
                                <input type="text" placeholder='@Warner' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                            </div>
                            <div className='flex flex-col gap-1 w-full md:w-1/2 md:max-w-[400px]'>
                                <label htmlFor="Instagram Account">Instagram Account</label>
                                <input type="text" placeholder='@Warner' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-3 mb-4 w-full'>
                            <div className='flex flex-col gap-1 w-full md:w-1/2 md:max-w-[400px]'>
                                <label htmlFor="LinkedIn Account">LinkedIn Account</label>
                                <input type="text" placeholder='@Warner' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                            </div>
                            <div className='flex flex-col gap-1 w-full md:w-1/2 md:max-w-[400px]'>
                                <label htmlFor="Dribble Account">Dribble Account</label>
                                <input type="text" placeholder='@Warner' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row gap-3 mb-4 w-full'>
                            <div className='flex flex-col gap-1 w-full md:w-1/2 md:max-w-[400px]'>
                                <label htmlFor="Behance Account">Behance Account</label>
                                <input type="text" placeholder='@Warner' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                            </div>
                            <div className='flex flex-col gap-1 w-full md:w-1/2 md:max-w-[400px] mb-4'>
                                <label htmlFor="U18 Account">U18 Account</label>
                                <input type="text" placeholder='Warner' className='border-2 border-gray-300 rounded-lg p-2 w-full'/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className='flex py-4 items-center justify-center'>
                <div className="w-full max-w-3xl rounded-xl shadow-md py-8 px-3 bg-white  border-1 border-gray-200">
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
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Editproduct

