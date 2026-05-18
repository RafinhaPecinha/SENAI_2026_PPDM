import atualizar from "../../assets/Atualizar.jpg"
import criarAtividade from "../../assets/criarAtividade.jpg"
import git from "../../assets/Git.jpg"
import revisao from "../../assets/revisao.jpg"

const tarefas = [
  {
    id: 1,
    title: 'Análise',
    description: 'Analisando os componentes e as resenhas.',
    status: 'Pendente',
    photo: revisao,
  },
  {
    id: 2,
    title: 'To online e roteando para as perversas',
    description: 'Online so esperando as mensagens das bbs.',
    status: 'Concluída',
    photo: criarAtividade,
  },
  {
    id: 3,
    title: 'Aurudo do FF',
    description: 'Farmamento de aura insano 67🔥🔥.',
    status: 'Pendente',
    photo: atualizar,
  },
  {
    id: 4,
    title: 'Aí Resenha',
    description: 'Aí resenha boa da beste.',
    status: 'Concluída',
    photo: git,
  },
];

export default tarefas;