import React ,{ useRef }from 'react'
import  SpinAndWin  from './react-spin-game'
const freeSpinGifts = [['test11111111','red'], ['test2','black'], ['test3','#808080'], ['test4','blue'], ['test5','gray'], ['test6','blue']]
const App = () => {
  const ref = useRef<any>(null)
  return <>
  <SpinAndWin data={freeSpinGifts}/>
  <button onClick={()=>ref.current.handleSpin()}>Spin</button></>
}

export default App
