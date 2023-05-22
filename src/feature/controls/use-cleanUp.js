import { clearControl } from './controls-slice';
import { useDispatch } from 'react-redux';

function useCleanUp() {
    const dispatch = useDispatch();
    const handleClear = () => dispatch(clearControl());
    return handleClear
}

export default useCleanUp