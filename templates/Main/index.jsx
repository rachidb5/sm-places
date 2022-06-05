import Navbar from  '../../organisms/navbar/index'
import Header from  '../../organisms/header/index'
import Table from  '../../organisms/table/index'
import Footer from  '../../organisms/footer/index'
import Loding from '../../molecules/loading/index'
import { MainDiv, View } from './styles'
import React, {useContext} from 'react'
import Context from '../../context/context'
import Loading from '../../molecules/loading/index'


function Main(){
    const { loading, setLoading } = useContext(Context)
    return(
        <MainDiv>
            <Navbar />
            <View>
                <Header />
                {loading ? <Loading />: <Table />}
                <Footer />
            </View>
        </MainDiv>
    )
}

export default Main