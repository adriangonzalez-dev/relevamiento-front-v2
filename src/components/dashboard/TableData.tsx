
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { Incident } from '../../interfaces/incident.interface';
import { parseDate } from "../../helpers/parseDate";

interface Props {
    data: Incident[],
    className?: string
}

export const TableData = ({data, className = 'md:text-md md:p-3 text-xs p-2'}:Props) => {
  return (
    <Table aria-label="Table for tickets">
      <TableHeader>
        <TableColumn>PEDIDO</TableColumn>
        <TableColumn>CATEGORÍA</TableColumn>
        <TableColumn>VÍA</TableColumn>
        <TableColumn>FECHA DE PEDIDO</TableColumn>
      </TableHeader>
      <TableBody>
        {
            data.map((item, index:number) => (
                <TableRow key={index}>
                    <TableCell className={className}>{item.request}</TableCell>
                    <TableCell className={className}>{item.type.name.includes('-') ? item.type.name.split('-')[0] : item.type.name}</TableCell>
                    <TableCell className={className}>{item.via.name}</TableCell>
                    <TableCell className={className}> {parseDate(item.request_date)}</TableCell>
                </TableRow>
            ))
        }
      </TableBody>
    </Table>
  );
}
