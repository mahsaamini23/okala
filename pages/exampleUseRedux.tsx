import React from 'react'
import type { RootState } from '../Toolkit/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Toolkit/slices/exampleSlice/example.slice'

type Props = {}

const exampleuseRedux = (props: Props) => {
  const count = useSelector((state: RootState) => state.exampe.value)
  const dispatch = useDispatch()
  return (
    <div>
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  </div>
  )
}

export default exampleuseRedux