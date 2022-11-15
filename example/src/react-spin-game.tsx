import React, { useRef, useState, useLayoutEffect , forwardRef, useImperativeHandle  } from 'react'
import { ReactComponent as Arrow } from './Images/wheel-arrow.svg'

interface SpinGameData {
  data: Array<Array<string>>
  hideButton?: boolean
  result?: string
  time?: number
  minTime?: number
  maxTime?: number
  removeButtonEffect?: boolean
  fontSize?: number
  fontFamily?: string,
  horizantalText?:boolean
}

const SpinAndWin = forwardRef(({
  data,
  hideButton,
  result,
  time,
  minTime,
  maxTime,
  removeButtonEffect,
  fontSize,
  fontFamily,
  horizantalText
}: SpinGameData , ref) => {
  interface stateInfo {
    winnerAngle: number
  }
  const wheelRef = useRef<any>()
  const [state] = useState<stateInfo>({ winnerAngle: 0 })
  useLayoutEffect(() => {
    var wheelCanvas = document.getElementById('wheel')
    if (wheelCanvas && isCanvas(wheelCanvas)) {
      var wheel = wheelCanvas.getContext('2d')
      var wheelX = wheelCanvas.width / 2
      var wheelY = wheelCanvas.height / 2
      var wheelRadius = Math.min(wheelX, wheelY)

      drawWheel(data, wheel, wheelX, wheelY, wheelRadius)
    }
  }, [])
  function isCanvas(
    obj: HTMLCanvasElement | HTMLElement
  ): obj is HTMLCanvasElement {
    return obj.tagName === 'CANVAS'
  }
  const degToRad = (deg: number) => {
    return (deg * Math.PI) / 180.0
  }
  const drawWheel = (
    list: Array<Array<string>>,
    wheel: any,
    wheelX: number,
    wheelY: number,
    wheelRadius: number
  ) => {
    var segment = 360 / list.length

    list.map((el: Array<string>, i: number) => {
      wheel.save()
      wheel.translate(wheelX, wheelY)
      wheel.rotate(degToRad(segment * i))
      wheel.translate(-wheelX, -wheelY)

      wheel.fillStyle = el[1] ? el[1] : 'red'

      wheel.beginPath()
      wheel.moveTo(wheelX, wheelY)
      wheel.arc(
        wheelX,
        wheelY,
        wheelRadius,
        0 - degToRad(90) - degToRad(segment / 2),
        degToRad(segment) - degToRad(90) - degToRad(segment / 2),
        false
      )
      wheel.moveTo(wheelX, wheelY)
      wheel.fill()

      wheel.fillStyle = 'white'
      horizantalText ? wheel.textAlign = 'start' : wheel.textAlign = 'end'
      wheel.font =
        fontSize && fontFamily
          ? `${fontSize}px ${fontFamily}`
          : fontSize
          ? `${fontSize}px sans-serif`
          : fontFamily
          ? `18px ${fontFamily}`
          : '18px sans-serif'
      wheel.transform = 'translate(50px, 100px)'
      if(horizantalText){
        wheel.textAlign = 'center';
        wheel.fillText(el[0], wheelX, wheelY / 4);
      }else{
        wheel.rotate(-1.57)
        wheel.fillText(el[0], -20, wheelY + 10)
      }


      wheel.restore()
    })
  }
  useImperativeHandle(ref, () => ({
    handleSpin(){
      let wheelCanvas = document.getElementById('wheel')
      if (wheelCanvas) {
        const freeSpinResult = result ? result : '23454'
        let transitionTime = time
          ? time
          : minTime && maxTime && minTime > 0 && maxTime > 0
          ? Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime
          : Math.floor(Math.random() * (4 - 3 + 1)) + 3
        wheelCanvas.style.transition = transitionTime + 's'
  
        let winner = data.find((item: Array<string>) => {
          return item[0] === freeSpinResult
        })
        if (!winner) {
          winner = ['']
        }
        let freeSpinGifts: Array<string> = []
        data.map((item: Array<string>) => {
          freeSpinGifts.push(item[0])
        })
        let winnerIndex = freeSpinGifts.indexOf(winner[0])
        let offset = state.winnerAngle % 360
        state.winnerAngle =
          state.winnerAngle +
          1800 -
          (360 * winnerIndex) / freeSpinGifts.length -
          offset
        let deg = 'rotate(' + state.winnerAngle + 'deg)'
        wheelCanvas.style.transform = deg
      }
    }
}));
  const handleSpin = () => {
    let wheelCanvas = document.getElementById('wheel')
    if (wheelCanvas) {
      const freeSpinResult = result ? result : '23454'
      let transitionTime = time
        ? time
        : minTime && maxTime && minTime > 0 && maxTime > 0
        ? Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime
        : Math.floor(Math.random() * (4 - 3 + 1)) + 3
      wheelCanvas.style.transition = transitionTime + 's'

      let winner = data.find((item: Array<string>) => {
        return item[0] === freeSpinResult
      })
      if (!winner) {
        winner = ['']
      }
      let freeSpinGifts: Array<string> = []
      data.map((item: Array<string>) => {
        freeSpinGifts.push(item[0])
      })
      let winnerIndex = freeSpinGifts.indexOf(winner[0])
      let offset = state.winnerAngle % 360
      state.winnerAngle =
        state.winnerAngle +
        2520 -
        (360 * winnerIndex) / freeSpinGifts.length -
        offset
      let deg = 'rotate(' + state.winnerAngle + 'deg)'
      wheelCanvas.style.transform = deg
    }
  }
  return (
    <div>
      <div className='rewards-spin-game'>
        <div className='canvas-container'>
          <canvas ref={wheelRef} id='wheel' width='450px' height='450px' />
          {!hideButton && (
            <span
              id='spin'
              onClick={() => (removeButtonEffect ? '' : handleSpin())}
            >
              SPIN
            </span>
          )}
        </div>
        <span className='arrow'>
          <Arrow title={'arrow-img'} />
        </span>
      </div>
    </div>
  )
})

export default SpinAndWin
