import { objectWrapper } from './common'

function rootFunction() {
  const myObj = { a: 1, b: '1', c: true, d: {k: 1234, l: 5678} }

  const cloneMutableObj = objectWrapper(myObj, { a: 5, c: false })

  console.log('original object:', myObj)
  console.log('clone mutable object:', cloneMutableObj)
}

rootFunction()
