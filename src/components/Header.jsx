import { RiResetLeftFill } from "react-icons/ri";
import { VscDebugStart } from "react-icons/vsc";
import { TbHandStop } from "react-icons/tb";
import { useContext } from "react";
import MainContext from "../context/Context";


const Header = () => {
    const handleStart = useContext(MainContext);
    return (
        <div className='button_wrapper'>
            <button onClick={handleStart.handleStopButton}><TbHandStop /></button>
            <button onClick={handleStart.handleResetButton}><RiResetLeftFill /></button>
            <button onClick={handleStart.handleStartButton}><VscDebugStart /></button>
        </div>
    )
}

export default Header
