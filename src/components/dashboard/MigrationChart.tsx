import {Card, CardHeader, CardBody, CardFooter, Divider, Link} from "@nextui-org/react";

interface Props {
  cant: number
}

export const MigrationChart = ({cant = 0}:Props) => {
  return (
    <Card className="md:w-1/3 w-full">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Restaurantes</p>
          <p className="text-small text-default-500">General</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody className="flex flex-col gap-2">
        <Card className="p-1">
            <CardBody className="p-2">
                <p className="text-sm">Nuevos Restaurantes del mes:</p>
                <p className="text-md font-bold">{cant}</p>
            </CardBody>
        </Card>
        <Card className="p-1">
            <CardBody className="p-2">
                <p className="text-sm">Total Restaurantes:</p>
                <p className="text-md font-bold">50</p>
            </CardBody>
        </Card>
      </CardBody>
      <Divider/>
      <CardFooter >
        <Link
        className="text-center"
          isExternal
          showAnchorIcon
          href="https://google.com"
        >
          Distribución de contenidos.
        </Link>
      </CardFooter>
    </Card>
  );
}