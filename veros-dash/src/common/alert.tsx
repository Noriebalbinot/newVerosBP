
import useAlert from './useAlert';
import { useEffect, useState } from 'react'
import { useTransition, animated } from "@react-spring/web"


export function AlertPopup() {
  const { text, type } = useAlert();
  const [show, setshow] = useState(false)
  useEffect(() => {
    text && setshow(true)
  }, [text])

  const transitions = useTransition(show, {
    from: { opacity: 0, top: '-50%' },
    enter: { opacity: 1, top: '50%' },
    leave: { opacity: 0, top: '100%' },
    config: {
      duration: 500
    },
    delay: 500,
    onRest: () => {
      setTimeout(() => {
        setshow(false)
      }, 1000);

    }
  })

  return transitions(({ opacity, top }, item) =>
    item && (
      <animated.div
        style={{
          position: 'fixed',
          left: '50%',
          top: top,
          zIndex: '100',
          transform: 'translate(-50%, -50%)',
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
          background: '#333',
          padding: '5rem',
          paddingLeft: '10rem',
          paddingRight: '10rem',
          borderRadius: '0.375rem',
          fontSize: '1.5rem',
          lineHeight: '2rem',
          borderWidth: '2px',
          borderColor: type === 'error' ? 'rgb(239 68 68)' : type === 'warn' ? 'rgb(253 224 71)' : 'rgb(132 204 22 )'

        }}>
        <div>
          {text}
        </div>
      </animated.div>
    )
  )

};

