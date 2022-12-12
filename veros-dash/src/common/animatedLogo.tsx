import CONNECT_LOGO from '../assets/CONNECT_LOGO.png'
import complogo from '../assets/complogo.png'
import { useState } from 'react'
import { config, useTransition, animated } from "@react-spring/web"

export function Logo() {
  const [toggle, set] = useState(true)
  const transitions = useTransition(toggle, {
    from: { position: 'absolute', rotateZ: 0, opacity: 0 },
    enter: { rotateZ: 360, opacity: 1 },
    leave: { rotateZ: 0, opacity: 0 },
    reverse: toggle,
    delay: 2000,
    config: config.molasses,
    onRest: () => {
      set(!toggle)
    },
  }
  )
  return transitions(({ rotateZ, opacity }, item) =>
    item ? (
      <animated.div
        style={{
          position: 'absolute',
          left: '0',
          top: '0',
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
          rotateZ: rotateZ.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}>
        <img src={complogo} alt='Logo' className='h-60 w-60 scale-50'></img>
      </animated.div>
    ) : (
      <animated.div
        style={{
          left: '0',
          top: '0',
          position: 'absolute',
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
          rotateZ: rotateZ.to({ range: [1.0, 0.0], output: [1, 0] }),
        }}>
        <img src={CONNECT_LOGO} alt='Logo' className='h-60 w-60'></img>
      </animated.div>
    )
  )
}