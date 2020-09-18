const map = (source, callback) => {
  let newArray = []
  for (let i = 0; i < source.length; i++) {
    let element = source[i]
    newArray.push(callback(element))
  }
  return newArray
}

const reduce = (source, callback, start) => {
  let x = (!!start) ? start : source[0]
  for (let i = (!!start) ? 0 : 1; i < source.length; i++) {
    x = callback(source[i], x)
  }
  return x
}