import {client as queryClient} from '../main.jsx';

export default function useClearApiData() {
    return () => {

        queryClient.cancelQueries();
        queryClient.clear();
    }

}