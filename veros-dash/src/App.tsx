import { useRef } from "react"
import { AlertPopup } from "./common/alert"
import { Loading } from "./common/loading"
import useAlert from "./common/useAlert"
import { QueryClientProvider } from 'react-query'
import { QueryClient } from 'react-query'
import { Logo } from "./common/animatedLogo"
import useLoading from "./common/useLoading"


const queryClient = new QueryClient()
function App() {
  const { setAlert } = useAlert()
  const { show, setLoading } = useLoading()

  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div className="w-screen h-screen bg-verosheader text-whitetext font-bold flex justify-center items-center gap-10 flex-col">

      <QueryClientProvider client={queryClient}>
        <AlertPopup />
        <Loading />
        <Logo />


        <div>
          text to Alert:
          <input className="bg-transparent border-2 m-2 rounded-lg" type="text" ref={inputRef} />
        </div>
        <div className="flex items-center gap-4">
          ALERTS:
          <button className="bg-verosblue p-2 rounded-md hover:opacity-70" onClick={() => {
            let texttosend = inputRef.current ? inputRef.current.value : 'test'
            setAlert(texttosend, 'sucess')
          }}>
            alert normal
          </button>
          <button className="bg-verosblue p-2 rounded-md hover:opacity-70" onClick={() => {
            let texttosend = inputRef.current ? inputRef.current.value : 'test'
            setAlert(texttosend, 'error')
          }}>
            alert error
          </button>
          <button className="bg-verosblue p-2 rounded-md hover:opacity-70" onClick={() => {
            let texttosend = inputRef.current ? inputRef.current.value : 'test'
            setAlert(texttosend, 'warn')
          }}>
            alert warning
          </button>
        </div>
        <button className="bg-verosblue p-2 rounded-md hover:opacity-70" onClick={() => {
          setLoading(show)
        }}> Loading</button>
        <h1>Veros Template</h1>
        <p>Bem vindo, aqui você encontrará alguns <br />
          exemplos de utilização dos hooks proprios assim <br />
          como das dependencias principais do template.</p>
        <div className="sec bg-mainblack p-2 rounded-md">
          <h1 className=" text-xl sectitle relative ">
            Own Hooks: <p className="absolute right-[-100%] top-0 animate-pulse bg-lime-700 p-2 rounded-md">hover me!</p>
          </h1>
          <p className="parag">
            UseLocalStorage <br />
            UseAlert <br />
            UseLoading
          </p>
        </div>
        <div className="sec bg-mainblack p-2 rounded-md">
          <h1 className=" text-xl sectitle relative">
            Dependencies: <p className="absolute right-[-70%] top-0 animate-pulse bg-lime-700 p-2 rounded-md">hover me!</p>
          </h1>
          <p className="parag">
            axios: 1.2.1<br />
            react-icons 4.7.1<br />
            react-query 3.39.2 <br />
            tailwindcss 3.2.4 <br />
            @react-spring/web: 9.6.0
          </p>
        </div>
      </QueryClientProvider>
    </div>
  )
}

export default App
