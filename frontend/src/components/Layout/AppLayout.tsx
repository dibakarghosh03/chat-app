import Header from './Header'
import Title from '../Common/Title'

const AppLayout = ()=> (WrapperComponent: any) => {
  return (props: any) => {
    return (
        <>
            <Title />
            <Header />
            <WrapperComponent {...props} />
        </>
    )
  }
}

export default AppLayout