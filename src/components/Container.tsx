import { childrenProps } from '../types'

const Container = ({children}: childrenProps) => {
  return (
    <div className=" px-5 md:px-20 h-full">{children}</div>
  )
}

export default Container