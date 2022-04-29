import './App.css';
import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState()
  const [beginning, setBeginning] = useState()

  const tick = () => {
    setCount(new Date(+new Date() - beginning))
  };

  const start = () => { setBeginning(+new Date()) }
  useEffect(() => {
    if (beginning) {
      requestAnimationFrame(tick)
    }
  }, [beginning])


  useEffect(() => {
    if (count) {
      requestAnimationFrame(tick)
    }
  }, [count])

  return (
    <div className="App" >
      <h1 className='timer' >{timeFormat(count)}</h1>
      <div className='row d-flex justify-content-center'>
        <div className='col-6'>
          <button className='btn btn-danger' onClick={start}>No pude realizarlo con el onLoad :(</button>
        </div>
      </div>
    </div>

  );
}

const timeFormat = (date) => {
  if (!date) return "00:00:00";

  let mm = date.getUTCMinutes();
  let ss = date.getSeconds();
  let cm = Math.round(date.getMilliseconds() / 10);

  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  cm = cm < 10 ? "0" + cm : cm;

  return `${mm}:${ss}:${cm}`
}

export default App;
