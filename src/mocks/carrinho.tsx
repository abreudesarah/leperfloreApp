import crisantemo from '../../assets/produtos/crisantemo.png';
import girassol from '../../assets/produtos/girassol.png';
import rosa from '../../assets/produtos/rosa.png';
import jadore from '../../assets/produtos/jadore.png';
import poison from '../../assets/produtos/poison.png';

const carrinho = {
    topo: {
        titulo: "Le Perflore",
    },
    detalhes: {
        nome: "Perfumes e Flores!",
        nomeFazenda: "A perfumaria e floricultura de melhor qualidade possível!",
        descricao: "Marcas de luxo diretamente da Europa!",
        preco: "R$ 900,00",
        botao: "Comprar",
    },
    itens: {
      titulo: "Itens do Carrinho",
      lista: [
        {
          nome: "Crisantemo",
          imagem: crisantemo,
        },
        {
          nome: "Girassol",
          imagem: girassol,
        },
        {
          nome: "Rosa",
          imagem: rosa,
        },
        {
          nome: "J'Adore",
          imagem: jadore,
        },
        {
          nome: "Poison",
          imagem: poison,
        }
      ]
    }
  }

export default carrinho;
