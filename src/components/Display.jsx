import { useContext } from 'react';
import MainContext from '../context/Context';

const Display = () => {
  const { count } = useContext(MainContext);

  const seconds = Math.floor(count / 1000);
  const milliseconds = Math.floor((count % 1000) / 10); 

  return (
    <h1>
      {seconds}:{milliseconds.toString().padStart(2, '0')}
    </h1>
  );
};
//done git work
export default Display;
