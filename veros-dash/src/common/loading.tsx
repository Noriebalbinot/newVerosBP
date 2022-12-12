import './loading.css'
import useLoading from './useLoading'


export function Loading() {
  const { show } = useLoading()

  //just a loading element
  return (
    <>
      {show &&
        <div
          className='fullelement w-screen h-screen left-0 top-0 fixed z-50'>

          <div
            className='element1'>
          </div>

          <div
            className='element2'>
          </div>

          <div
            className='element3'>
          </div>
          <div
            className='element4'>
          </div>

        </div>
      }
    </>
  )
}