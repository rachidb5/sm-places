import { useEffect, useState, useContext } from "react"
import Context, { IProducts } from '../../context/context';
import { TableContainer, TableHead, Table, TableHeader } from './styles'
import TableLine from "../../atoms/tableLine/index";

function TableMolecule(){
    const { data, itemsNumber, term, pageNumber } = useContext(Context)
    let filteredData: IProducts[]  = data.filter(data => (data.name+data.categories+data.code).toLowerCase().includes(term.toLowerCase()))
    filteredData = filteredData.slice((pageNumber*itemsNumber)-itemsNumber,pageNumber*itemsNumber)
    filteredData = filteredData.slice(0, itemsNumber)

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