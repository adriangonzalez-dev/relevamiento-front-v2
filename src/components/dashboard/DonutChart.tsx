import { DonutChart, Title, Legend } from "@tremor/react";
import { Card } from '@nextui-org/react'

      interface DataProps {
        types: string,
        count: number
      }

      interface Props {
        data: DataProps[],
        cantidad: number
      }

      export const DonutChartComponent = ({data, cantidad}:Props) => (
        <Card className="md:w-1/3 w-full p-4">
          <Title>{cantidad} Solicitudes</Title>
          <DonutChart
            variant="pie"
            className="mt-3"
            data={data}
            category="count"
            index="types"
            colors={["amber","blue","cyan","emerald","fuchsia","gray","green","indigo","lime","neutral","orange","pink","purple","red","rose","sky","slate","teal","yellow"]}
          />
          <Legend
            className="mt-3"
            categories={data.map(categories=>categories.types)}
            colors={["amber","blue","cyan","emerald","fuchsia","gray","green","indigo","lime","neutral","orange","pink","purple","red","rose","sky","slate","teal","yellow"]}
            />
        </Card>
      );