import { useContext } from 'react';
import LoadingContext from './loadingcontext';

//export the use alert as a hook
const useLoading = () => useContext(LoadingContext);

export default useLoading;