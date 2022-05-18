export const nowTime = () =>{
  const time = new Date()
  return `${time.getHours()}_${time.getMinutes()}_${time.getSeconds()}__${time.getDay()}_${time.getMonth()}_${time.getFullYear()}`
}
export const prettyTime = () =>{
  const time = new Date()
  return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}  ${time.getDay()}.${time.getMonth()}.${time.getFullYear()}`
}
