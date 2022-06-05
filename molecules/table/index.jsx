import { useEffect, useState, useContext } from "react"
import Context from '../../context/context';
import { TableContainer, TableHead, Table, TableHeader } from './styles'
import TableLine from "../../atoms/TableLine/index";

function Tabela(){
    const { data, itemsNumber, term, pageNumber } = useContext(Context)
    let pagedData = data.slice((pageNumber*itemsNumber)-itemsNumber,pageNumber*itemsNumber)
    let filteredData = pagedData.slice(0, itemsNumber)
    filteredData = filteredData.filter(d => (d.name+d.categories+d.code).toLowerCase().includes(term.toLowerCase()))

    console.log(term)
    return(
    <TableContainer>
        {console.log(typeof itemsNumber)}
        <Table>
            <TableHead>
                <tr>
                    <TableHeader></TableHeader>
                    <TableHeader></TableHeader>
                    <TableHeader>Produto</TableHeader>
                    <TableHeader>Qtd. Estoque</TableHeader>
                    <TableHeader>Código</TableHeader>
                    <TableHeader>Categoria</TableHeader>
                    <TableHeader>Status</TableHeader>
                </tr>
            </TableHead>
            <tbody>
                {filteredData.map(d => <TableLine key={d.id} image={d.image} name={d.name} estoque={d.quantity} codigo={d.code} categoria={d.categories} status={d.status === true ? 'Ativo':'Inativo'}/>)}
            </tbody>
        </Table>
    </TableContainer>
)
}

export default Tabela