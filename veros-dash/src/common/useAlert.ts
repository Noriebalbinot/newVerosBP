import { useContext } from 'react';
import AlertContext from './alertcontext';

//export the use alert as a hook
const useAlert = () => useContext(AlertContext);

export default useAlert;