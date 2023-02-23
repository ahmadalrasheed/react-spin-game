# react-spin-game

> react-spin-game is a wheel of prizes game, spinning game build using reactjs

[![NPM](https://img.shields.io/npm/v/react-spin-game.svg)](https://www.npmjs.com/package/react-spin-game) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-spin-game
```
## Preview
![react-spin-game-photo](/spin-game.png)
## Usage

```tsx
import React, { Component } from 'react'

import  SpinAndWin  from 'react-spin-game'
import  'react-spin-game/dist/index.css'

const freeSpinGifts = [['test1','red'], ['test2','black'], ['test3','#808080'], ['test4','blue'], ['test5','gray'], ['test6','blue']]

class Example extends Component {
  render() {
    return <SpinAndWin data={freeSpinGifts}/>
  }
}
```
## Additional properties

```tsx
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

```
`Description:`
1. data: data to be displayed in spin game and their background colors, as array of arrays
* Example:
`[['test1','red'], ['test2','black'], ['test3','#808080'], ['test4','blue'], ['test5','gray'], ['test6','blue']]`
2. hideButton: indicator to display the `SPIN` button or not
* Example:
`true || false`
3. result: the result of spining the wheel
* Example:
`test1`
4. time: the time of the transition after the wheel is spined
* Example:
`5 (any number)`
5. `minTime` and `maxTime`: the minimum and maximum time for the transition, in case that you need the spin time to be random between a range of two numbers
* Example:
`5 (any number)`
6. removeButtonEffect: indicator to stop the functionality of the `SPIN` button 
* Example:
`true`
7. fontSize: to change the font size for the text
* Example:
`26`
8. fontFamily: to change the font family for the text
* Example:
`fantasy`
9. horizantalText: to switch the text to be horizontal instead of vertical
* Example:
`true`

**Hint** :
you can also pass `ref` prop to `SpinAndWin` component to extract the function responsible for the spinning of the wheel, if you wish to use it on another component.
* Example:
```tsx

import React ,{ useRef }from 'react'
import  SpinAndWin  from 'react-spin-game'
import  'react-spin-game/dist/index.css'

const freeSpinGifts = [['test1','red'], ['test2','black'], ['test3','#808080'], ['test4','blue'], ['test5','gray'], ['test6','blue']]
const App = () => {
  const ref = useRef<any>(null)
  return <>
  <SpinAndWin ref={ref} data={freeSpinGifts} />
  <button onClick={()=>ref.current.handleSpin()}>Spin</button></>
}

export default App

```



## License

MIT © [ahmadalrasheed](https://github.com/ahmadalrasheed)
