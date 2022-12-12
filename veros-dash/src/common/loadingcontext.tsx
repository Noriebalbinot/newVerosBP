import { createContext, useState, ReactNode } from 'react';

//alert context creation
interface Props {
  children?: ReactNode
}



// initial state of context
const LoadingContext = createContext({
  show: false,
  setLoading: (show: boolean) => { },
});


//export the provider
export const LoadingProvider = ({ children }: Props) => {
  const [show, setshow] = useState(false);
  const setLoading = (show: boolean) => {
    setshow(!show);
  };

  return (
    <LoadingContext.Provider
      value={{
        show,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;