const NotificationToast = ({ texts, bgColor }) => {
  return (
    <div>
      <div 
      style={{ backgroundColor: bgColor }} 
      className='p-4 rounded-md w-[110px] text-white'>
        <h1>{texts}</h1>
      </div>
    </div>
  );
};

export default NotificationToast;