import { Spinner } from '@nextui-org/react'

export const SpinnerLoading = () => {
  return (
    <section className='w-full h-full flex items-center justify-center'>
        <Spinner label="Cargando..." color="primary" labelColor="primary"/>
    </section>
  )
}
