import Navbar from  '../../organisms/navbar/index'
import Header from  '../../organisms/header/index'
import Table from  '../../organisms/table/index'
import Footer from  '../../organisms/footer/index'
import { MainDiv, View } from './styles'

function Main(){
    return(
        <MainDiv>
            <Navbar />
            <View>
                <Header />
                <Table />
                <Footer />
            </View>
        </MainDiv>
    )
}

export default Main