import { createContext, useState, ReactNode } from 'react';

//alert context creation
interface Props {
  children?: ReactNode
}

//time that the alert will stay on screen
const screenTime = 4000;

// initial state of context
const AlertContext = createContext({
  text: '',
  type: '',
  setAlert: (text: string, type: string) => { },
});


//export the provider
export const AlertProvider = ({ children }: Props) => {
  const [text, setText] = useState('');
  const [type, setType] = useState('');
  const setAlert = (text: string, type: string) => {
    setText(text);
    setType(type);
    setTimeout(() => {
      setText('');
      setType('');
    }, screenTime);
  };

  return (
    <AlertContext.Provider
      value={{
        text,
        type,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;