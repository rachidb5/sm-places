import { fireEvent, render, screen } from '@testing-library/react'
import Provider from '../context/provider'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('Testa Existencia do botão', () => {
    render(
    <Provider>
      <Home />
    </Provider>
    )
    const button = screen.getByText('Novo Produto');
    expect(button).toBeInTheDocument();
    expect(button.type).toBe('button');

  })
})

describe('Home', () => {
  it('Testa Existencia do titulo', () => {
    render(
    <Provider>
      <Home />
    </Provider>
    )
    const title = screen.getByText('Produtos');
    expect(title).toBeInTheDocument();
  })
})

describe('Home', () => {
  it('Testa Existencia do campo de pesquisa', () => {
    render(
    <Provider>
      <Home />
    </Provider>
    )
    const searchInput = screen.getByPlaceholderText("Busque por Nome, EAN ou Código");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput.type).toBe('text');
  })
})

describe('Home', () => {
  it('Testa quantidade inicial de linhas', () => {
    render(
    <Provider>
      <Home />
    </Provider>
    )
    const column = screen.getAllByRole('column');
    expect(column).toHaveLength(7);
  })
})

describe('Home', () => {
  it('Testa quantidade inicial de linhas', () => {
    render(
    <Provider>
      <Home />
    </Provider>
    )
    const rows = screen.getAllByRole('checkbox');
    expect(rows).toHaveLength(5);
  })
})


describe('Home', () => {
  it('Testa quantidade de linhas apos seleção', () => {
    render(
    <Provider>
      <Home />
    </Provider>
    )

    const select = screen.getAllByRole('select')[0];
    fireEvent.change(select, { target: { value: '10' } })
    const rows = screen.getAllByRole('checkbox');
    expect(rows).toHaveLength(10);
  })
})

describe('Home', () => {
  it('Testa mecanismo de busca', () => {
    render(
    <Provider>
      <Home />
    </Provider>
    )

    const search = screen.getAllByRole('search')[0]
    fireEvent.change(search, { target: { value: 'men' } })
    const category = screen.getAllByRole('category');
    const rows = screen.getAllByRole('checkbox');
    expect(category).toHaveLength(rows.length)
  })
})