import { memo, useEffect, useState } from "react"
import { GraphicsContainer } from "../components/dashboard/GraphicsContainer"
import { TableData } from "../components/dashboard/TableData"
import { useParams } from "react-router-dom"
import { Incident } from "../interfaces/incident.interface"
import { getDataIncidents } from "../services/incident.service"
import { SpinnerLoading } from "../components/common/Loading"
import { Button, useDisclosure } from "@nextui-org/react"
import { ModalBox } from "../components/common/Modal"

export const DashboardInvgate = memo(() => {
  const {id} = useParams()
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const getData = async():Promise<void> => {
    setLoading(true)
    try {
      const data = await getDataIncidents();
      if(!data){
        setIncidents([]);
      }
      if(!id && data){
        setIncidents(data);
      }
      if(data && id !== undefined){
        setIncidents(data.filter(incident => incident && incident.country && incident.country.id && +incident.country.id === +id));

      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData();
  },[id])


  if(loading){
    return <SpinnerLoading/>
  }
  return (
    <>
      <section className="relative">
        <GraphicsContainer data={incidents}/>
        <article className="mt-2">
          <TableData data={incidents}/>
        </article>
        <Button onPress={onOpen} color='primary' className="fixed bottom-[2vh] right-[2vw]">
          Descargar PDF
        </Button>
      </section>
      {/* Modal! */}
      <ModalBox onOpenChange={onOpenChange} isOpen={isOpen}>
        <section className="relative page border w-[297mm] h-[420mm] mx-auto">
          <GraphicsContainer data={incidents}/>
          <article className="mt-2">
            <TableData data={incidents} className='p-1 text-xs'/>
          </article>
        </section>
      </ModalBox>
    </>
  )
})
