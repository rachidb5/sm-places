import Navbar from  '../../organisms/navbar/index'
import Header from  '../../organisms/header/index'
import TableOrganism from  '../../organisms/table/index'
import Footer from  '../../organisms/footer/index'
import { MainDiv, View } from './styles'
import React from 'react'


function Main(){
    return(
        <MainDiv>
            <Navbar />
            <View>
                <Header />
                <TableOrganism />
                <Footer />
            </View>
        </MainDiv>
    )
}

export default Main