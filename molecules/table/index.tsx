import { useEffect, useState, useContext } from "react"
import Context from '../../context/context';
import { TableContainer, TableHead, Table, TableHeader } from './styles'
import TableLine from "../../atoms/tableLine/index";

function TableMolecule(){
    const { data, itemsNumber, term, pageNumber } = useContext(Context)
    let pagedData = data.slice((pageNumber*itemsNumber)-itemsNumber,pageNumber*itemsNumber)
    let filteredData = pagedData.slice(0, itemsNumber)
    filteredData = filteredData.filter(data => (data.name+data.categories+data.code).toLowerCase().includes(term.toLowerCase()))

    console.log(term)
    return(
    <TableContainer>
        <Table>
            <TableHead>
                <tr>
                    <TableHeader role='column'></TableHeader>
                    <TableHeader role='column'></TableHeader>
                    <TableHeader role='column'>Produto</TableHeader>
                    <TableHeader role='column'>Qtd. Estoque</TableHeader>
                    <TableHeader role='column'>Código</TableHeader>
                    <TableHeader role='column'>Categoria</TableHeader>
                    <TableHeader role='column'>Status</TableHeader>
                </tr>
            </TableHead>
            <tbody>
                {filteredData.map(data => <TableLine key={data.id} image={data.image} name={data.name} quantity={data.quantity} code={data.code} category={data.categories} status={data.status === true ? 'Ativo':'Inativo'}/>)}
            </tbody>
        </Table>
    </TableContainer>
)
}

export default TableMolecule