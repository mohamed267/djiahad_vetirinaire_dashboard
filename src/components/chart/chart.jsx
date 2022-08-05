import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import { useTranslation } from 'react-i18next';
import "./chart.scss"
const data = [
  {name : "january" ,  total : 1000},
  {name : "february" ,  total : 1300},
  {name : "march" ,  total : 100},
  {name : "april" ,  total : 800},
  {name : "may" ,  total : 1800},
  {name : "june" ,  total : 200},
]
const Chart = () => {
    const {t} = useTranslation("common"); 
    return (
     <div className="chart">
        <h1 className="title"> {t("last months revenue")} </h1>
        <ResponsiveContainer width="100%" aspect={2  / 1}>
        <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              
            </defs>
            <XAxis dataKey="name" stroke="gray" />
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
             </AreaChart>
      </ResponsiveContainer>
     </div>
    )
  }


  export  default Chart