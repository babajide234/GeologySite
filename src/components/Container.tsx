import { childrenProps } from '../types'

const Container = ({children}: childrenProps) => {
  return (
    <div className=" px-5 md:px-20">{children}</div>
  )
}

export default Container