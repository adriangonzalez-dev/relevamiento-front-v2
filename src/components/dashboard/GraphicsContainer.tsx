import { useEffect, useState } from "react"
import { Incident } from "../../interfaces/incident.interface"
import { BarChartComponent } from "./BarChart"
import {DonutChartComponent} from "./DonutChart"
import { MigrationChart } from "./MigrationChart"

interface Props {
    data: Incident[]
}

interface DonutData {
    types: string,
    count: number
}

export const GraphicsContainer = ({data}:Props) => {
    const [donutData, setDonutData] = useState<DonutData[]>([]);
    useEffect(()=>{
        if (data) {
            const counts: { [key: string]: number } = {};
        
            data.forEach((dataSheet) => {
              const type = dataSheet.type;
        
              if (type) {
                const typeId = type.id.toString();
                if (counts[typeId]) {
                  counts[typeId]++;
                } else {
                  counts[typeId] = 1;
                }
              }
            });
        
            const typeCountsArray = Object.entries(counts).map(([typeId, count]) => ({
              types: data.find((dataSheet) => dataSheet.type?.id.toString() === typeId)?.type.name || 'Desconocido',
              count,
            }));
        
            setDonutData(typeCountsArray);
        }
    },[data])

  return (
    <article className='flex flex-wrap md:flex-nowrap gap-2'>
        <DonutChartComponent data={donutData} cantidad={data.length}/>
        <BarChartComponent data={data}/>
        <MigrationChart cant={
          data.filter((item)=>item.type.name === 'Novo registro de filial').length
          +
          data.filter((item)=>item.type.name === 'Alta Nueva Sucursal').length
          +
          data.filter((item)=>item.type.name === 'Alta nueva sucursal').length
          }/>
    </article>
  )
}
