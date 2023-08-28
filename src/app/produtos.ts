
// Interface para representar um produto
export interface IProduto {
    id: number;
    nome: string;
    preco: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

// Array de produtos fictícios
export const produtos: IProduto[] = [
    {
        id: 1,
        nome: 'Teclado',
        preco: 119.99,
        imagem: './assets/imagem1.jpg',
    },
    {
        id: 2,
        nome: 'Monitor',
        preco: 139.99,
        imagem: './assets/imagem2.jpg',
    },
    {
        id: 3,
        nome: 'Mouse',
        preco: 59.99,
        imagem: './assets/imagem3.jpg',
    },
    {
        id: 4,
        nome: 'Fone de ouvido',
        preco: 79.99,
        imagem: './assets/imagem4.jpg',
    },
    {
        id: 5,
        nome: 'SSD',
        preco: 199.99,
        imagem: './assets/imagem5.jpg',
    },
    {
        id: 6,
        nome: 'Notebook',
        preco: 1299.99,
        imagem: './assets/imagem6.jpg',
    }
];
