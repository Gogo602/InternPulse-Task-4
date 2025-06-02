import React from 'react'
import NotificationCard from '../NotificationCard';
import NotificationToast from '../NotificationToast';


const backgroundColors ={
        shade1: "#DECCFE",
        shade2:"#6E39CB",
        shade3:"#533FE4",
        shade4:"#F93131",
        shade5:"#2DCCFF",
        shade6:"#D3BBFE",
        shade7:"#B4B2B7",
        shade8:"#3A3541"
    }


const Notification = () => {
    const cardMessage =['A simple Primary alert with an example link Give it a click if you like','A simple Secondary alert with an example link Give it a click if you like',
                        'A simple Sucess alert with an example link Give it a click if you like','A simple Danger alert with an example link Give it a click if you like',
                        'A simple Warning alert with an example link Give it a click if you like','A simple info alert with an example link Give it a click if you like',
                        'A simple light alert with an example link Give it a click if you like','A simple dark alert with an example link Give it a click if you like'
    ];

 const colorKeys = [
    'shade1',
    'shade2',
    'shade3',
    'shade4',
    'shade5',
    'shade6',
    'shade7',
    'shade8',
  ];

  const toastMessage=[
    {message:"Success Notification", bg:'shade3'},
   {message:"Warning Notification", bg:'shade5'},
   {message:"Danger Notification", bg:'shade4'},
   {message:"Secondary Notification", bg:'shade2'}
  ]

  return (
    <div className='pb-40 lato'>
        <div className='flex flex-col gap-8 justify-center  items-center md:ml-60'>

         <div className='bg-white w-[531px] flex flex-col gap-6 p-6 rounded-[8px]'>
            {/* sub header starts here */}
            <h1 className='text-[25px] font-semibold lato'>Alert</h1>

            <div>
                {/* notifications alert */}

                <div className='flex flex-col gap-10 justify-between items-center'>
                {
                    cardMessage.map((card, index)=>(
                        <div key={index}>
                           <NotificationCard
                          
                        text={card}
                        bgColor={colorKeys[index]}
                           
                           /> 
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
        
        <div className='bg-white flex flex-col gap-8 px-4 py-8'>
            {/* subheader and message */}
            <div className='' >
                <h1 className='font-bold text-[22px]'>Notification</h1>
                <p className='text-[12px]'>Notification on this page use Toasts from Bootstrap. Read more details here</p>
            </div>
            {/* subheader and meassage ends here */}
               
                {/* notification box starts here */}
                <div className='flex justify-center items-center gap-6'>
                    {
                        toastMessage.map((msg,index)=>(
                           <div key={index}> 
        <NotificationToast
          texts={msg.message}
          bgColor={backgroundColors[msg.bg]}
        />
      </div>
                        ))
                    }
                </div>
            
            {/* notification box ends here */}
        </div>
       
        </div>
       
     
     
    </div>
  )
}

export default Notification
