import React, { createContext, useRef, useState } from 'react'
import Header from './components/Header'
import Display from './components/Display'
import MainContext from './context/Context' //.js file



const App = () => {
  const [count, setCount] = useState(0);
  const [pause, setPause] = useState(false);
  const intervalRef = useRef(null);

  const handleStartButton = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 10);
    }, 10);
    setPause(false);
  };

  const handleStopButton = () => {
    setPause(true);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleResetButton = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCount(0);
  };

  return (
    <MainContext.Provider value={{ count, setCount, handleStartButton, handleStopButton, handleResetButton}}>
      <Header />
      <Display />
    </MainContext.Provider>
  )
}

export default App
