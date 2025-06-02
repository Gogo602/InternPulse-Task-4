import { MdCancel } from "react-icons/md";


const NotificationCard = ({text,bgColor})=>{
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
    
    return(
        <div>
            <div 
             style={{ backgroundColor: backgroundColors[bgColor] || '#ccc' }}
            className=' flex text-white px-2 py-4 justify-between w-[471px] items-center rounded'>
                <h1 className='text-[12px]'>{text}</h1>
                <MdCancel />
            </div>
        </div>
    )
}

export default NotificationCard