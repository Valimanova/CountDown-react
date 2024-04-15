import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap'; 
import './App.css';
import CustomButton from './assets/components/Buttons';
import RegisterInp from './assets/components/Input'; 

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(10);

  useEffect(() => {
    let interval;
    if (isOpen) {
      interval = setInterval(() => {
        setValue(prev => {
          const newValue = prev - 1;
          if (newValue === 0) { 
            clearInterval(interval);
            setIsOpen(false);
          }
          return newValue; 
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOpen]);

  const start = () => {
    setIsOpen(true);
  };

  const stop = () => {
    setIsOpen(false);
  };
 

  return (
    <>
      <CustomButton onClick={start} id="success">
        Start
      </CustomButton>
      <CustomButton>
        {value}
      </CustomButton>
      <CustomButton onClick={stop} id="danger">
        Stop
      </CustomButton>
     
      <div className='m-5'>
      <RegisterInp/>
      </div>
      
    </>
  );
}

export default App;



