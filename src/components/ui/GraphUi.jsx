export default function GraphUi({ name, time, className, children, ...props }) {
  return (
    <div {...props} className={`p-[30px] text-[12.64px] text-[#B4B2B7] bg-white rounded-xl ${className}`} >
      <div className="flex justify-between p-1 mb-4.5">
        <h4 className="text-[20.25px] text-[#3A3541] font-medium">{name}</h4>
        <p className="flex gap-2.5 bg-slate-100 text-[14.22px] text-[#6E39CB] p-[10px] rounded-lg">{time}</p>
      </div>
      <div className="h-64">
        {children}
      </div>      
    </div>
  );
}
