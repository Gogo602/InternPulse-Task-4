import React from 'react'
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const Card = () => {
    const chartData = <div className='text-red-700'>text</div> || [];
  return (
    <div>
         <ResponsiveContainer width='100%' height='100%'>
            <AreaChart data={chartData}>
                <defs>
                    <linearGradient
                    id='colorPv'
                    x1='0'
                    y1='0'
                    x2='0'
                    y2='1'>
                    <stop
                        offset='5%'
                        stopColor='#f87171'
                        stopOpacity={0.1}
                    />
                    <stop
                        offset='95%'
                        stopColor='#f87171'
                        stopOpacity={0}
                    />
                    </linearGradient>
                </defs>
            <Area
                type='monotone'
                dataKey='value'
                stroke='#f87171'
                fillOpacity={1}
                fill='url(#colorPv)'
            />
            </AreaChart>
        </ResponsiveContainer> 
    </div>
  )
}

export default Card