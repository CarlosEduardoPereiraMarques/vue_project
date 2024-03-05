<script setup>
import Accordion from '../components/Dashboard/Accordion.vue'
import LateSubmissions from '../components/Assignment/LateSubmissions.vue';
import SubmissionsDelivered from '../components/Assignment/SubmissionsDelivered.vue';
import SubmissionsNotDelivered from '../components/Assignment/SubmissionsNotDelivered.vue';
import SubmissionsPendingReview from '../components/Assignment/SubmissionsPendingReview.vue';


</script>

<template>
    <main>
    <!-- Fazer uma verificação antes dos cursos do usuário para fazer uma lista para ele poder ingressar e ver os dados retornados do curso selecionado -->
        <div class="inline-flex relative items-center mb-5 w-full justify-between">
            <div>
                <router-link to="/dashboard" class="inline-flex relative items-center py-[10px] px-[10px] bg-gray-600 text-white p-2 mt-2 rounded-md hover:bg-gray-400 transition duration-300">
                    <svg class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.66088 8.53078C9.95402 8.23813 9.95442 7.76326 9.66178 7.47012C9.36913 7.17698 8.89426 7.17658 8.60112 7.46922L9.66088 8.53078ZM4.47012 11.5932C4.17698 11.8859 4.17658 12.3607 4.46922 12.6539C4.76187 12.947 5.23674 12.9474 5.52988 12.6548L4.47012 11.5932ZM5.51318 11.5771C5.21111 11.2936 4.73648 11.3088 4.45306 11.6108C4.16964 11.9129 4.18475 12.3875 4.48682 12.6709L5.51318 11.5771ZM8.61782 16.5469C8.91989 16.8304 9.39452 16.8152 9.67794 16.5132C9.96136 16.2111 9.94625 15.7365 9.64418 15.4531L8.61782 16.5469ZM5 11.374C4.58579 11.374 4.25 11.7098 4.25 12.124C4.25 12.5382 4.58579 12.874 5 12.874V11.374ZM15.37 12.124V12.874L15.3723 12.874L15.37 12.124ZM17.9326 13.1766L18.4614 12.6447V12.6447L17.9326 13.1766ZM18.25 15.7351C18.2511 16.1493 18.5879 16.4841 19.0021 16.483C19.4163 16.4819 19.7511 16.1451 19.75 15.7309L18.25 15.7351ZM8.60112 7.46922L4.47012 11.5932L5.52988 12.6548L9.66088 8.53078L8.60112 7.46922ZM4.48682 12.6709L8.61782 16.5469L9.64418 15.4531L5.51318 11.5771L4.48682 12.6709ZM5 12.874H15.37V11.374H5V12.874ZM15.3723 12.874C16.1333 12.8717 16.8641 13.1718 17.4038 13.7084L18.4614 12.6447C17.6395 11.8276 16.5267 11.3705 15.3677 11.374L15.3723 12.874ZM17.4038 13.7084C17.9435 14.245 18.2479 14.974 18.25 15.7351L19.75 15.7309C19.7468 14.572 19.2833 13.4618 18.4614 12.6447L17.4038 13.7084Z" fill="#ffffff"></path> </g></svg>
                    Voltar
                </router-link>
            </div>
            <div>
                <h1>Curso <span>@</span></h1>
                <h2>Criado em <span>xx/xx/xxxx</span> | Total de Alunos: <span>@</span></h2>
                <h3>Última Atualização: <span>XXXXXXX</span></h3>
            </div>
            <div class="">
                <button class="inline-flex relative items-center py-[10px] px-[10px] bg-gray-600 text-white p-2 mt-2 rounded-md hover:bg-gray-400 transition duration-300">
                    <svg viewBox="0 0 24 24" class="mr-2 w-[25px] h-[25px]" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 12C3 16.9706 7.02944 21 12 21C14.3051 21 16.4077 20.1334 18 18.7083L21 16M21 12C21 7.02944 16.9706 3 12 3C9.69494 3 7.59227 3.86656 6 5.29168L3 8M21 21V16M21 16H16M3 3V8M3 8H8" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    Atualizar Dados
                </button>
            </div>
        </div>
        <div>
    <Accordion title="Alunos">
      <div class="table">
        <div class="table-header">
          <div class="cell">Nomes:</div>
        </div>
        <template v-for="(aluno, index) in listaDeAlunos" :key="'row-' + index">
          <div class="table-row">
            <div class="cell flex items-center">{{ aluno.nome }}</div>
            <div class="cell grid grid-cols-1 gap-4 place-items-end">
              <button @click="toggleInformacoes(index)" class="inline-flex relative items-center py-[10px] px-[10px] bg-gray-600 text-white p-2 mt-2 rounded-md hover:bg-gray-400 transition duration-300">
                <svg v-if="!alunoExpandido || alunoIndex !== index" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6" />
                </svg>
                <span v-if="!alunoExpandido || alunoIndex !== index">Detalhes</span>
                <span v-else>Ocultar detalhes</span>
              </button>
            </div>
          </div>
          <div v-if="alunoIndex === index && alunoExpandido" :key="'details-' + index" class="table-row">
            <div class="cell" colspan="2"> <!-- Colspan para ocupar a largura da tabela -->
              <p><strong>Nome:</strong> {{ aluno.nome }}</p>
              <p><strong>Último Login:</strong> {{ aluno.ultimoLogin }}</p>
              <p><strong>Tempo de Acesso:</strong> {{ aluno.tempoAcesso }}</p>
              <p><strong>Data de Inclusão:</strong> {{ aluno.dataInclusao }}</p>
              <p><strong>Notas:</strong> {{ aluno.notas }}</p>
            </div>
          </div>
        </template>
      </div>
    </Accordion>
  </div>
    <div>
        <Accordion title="Anúncios">
            <!-- Fazer um for pros anúncios -->
            <div class="table">
        <div class="table-header">
            <div class="cell">Nome:</div>
            <div class="cell">Criado em:</div>
            <div class="cell">Postado em:</div>
            <div class="cell">Nome do Autor:</div>
            <div class="cell">Conteúdo da mensagem:</div>
        </div>
        <template v-for="(anuncio, index) in listaDeAnuncios" :key="'anuncio-' + index">
            <div class="table-row">
                <div class="cell">{{ anuncio.nome }}</div>
                <div class="cell">{{ anuncio.criadoEm }}</div>
                <div class="cell">{{ anuncio.postadoEm }}</div>
                <div class="cell">{{ anuncio.nomeAutor }}</div>
                <div class="cell">{{ anuncio.conteudoMensagem }}</div>
            </div>
        </template>
    </div>
        </Accordion>
    </div>
    <Accordion title="Fórum">
        <div class="table">
            <div class="table-header">
                <div class="cell">Nome:</div>
                <div class="cell">Criado em:</div>
                <div class="cell">Postado em:</div>
                <div class="cell">Nome do Autor:</div>
                <div class="cell">Conteúdo da mensagem:</div>
                <div class="cell">Última resposta em:</div>
            </div>
            <!-- Aqui você pode fazer um loop para os fóruns -->
            <template v-for="(forum, index) in listaDeForuns" :key="'forum-' + index">
                <div class="table-row">
                    <div class="cell">{{ forum.nome }}</div>
                    <div class="cell">{{ forum.criadoEm }}</div>
                    <div class="cell">{{ forum.postadoEm }}</div>
                    <div class="cell">{{ forum.nomeAutor }}</div>
                    <div class="cell">{{ forum.conteudoMensagem }}</div>
                    <div class="cell">{{ forum.ultimaRespostaEm }}</div>
                </div>
            </template>
        </div>
    </Accordion>
    <div>
    <Accordion title="Atividades">
      <template v-for="(assignment, index) in listaDeAtividades" :key="'assignment-' + index">
        <Accordion :title="assignment.name">
          <Accordion title="Submissões atrasadas:">
            <div class="table">
              <LateSubmissions :assignment="assignment"/>
              <!-- Componente para mostrar notas -->
            </div>
          </Accordion>
          <Accordion title="Submissões entregues:">
            <div class="table">
              <SubmissionsDelivered :assignment="assignment"/>
            </div>
          </Accordion>
          <Accordion title="Submissões não entregues:">
            <div class="table">
              <SubmissionsNotDelivered :assignment="assignment"/>
            </div>
          </Accordion>
          <Accordion title="Submissões pendentes de revisão:">
            <div class="table">
              <SubmissionsPendingReview :assignment="assignment"/>
            </div>
          </Accordion>
        </Accordion>
      </template>
    </Accordion>
  </div>
        <Accordion title="Vídeos">
            <Accordion title="Engajamento">
                <!-- Fazer um for para cada video -->
                <Accordion title="{{ video.engagement }}"></Accordion>
            </Accordion>
            <Accordion title="Comentários">
                <!-- Fazer um for para cada video -->
                <Accordion title="{{ video.comments }}"></Accordion>
            </Accordion>
        </Accordion>

    </main>
</template>

<script>
export default {
  data() {
    return {
      listaDeAlunos: [
        { nome: 'João Silva Costa', ultimoLogin: '2024-02-21', tempoAcesso: '3 horas', dataInclusao: '2023-10-15', notas: '10' },
        { nome: 'Maria Oliveira', ultimoLogin: '2024-02-20', tempoAcesso: '2 horas', dataInclusao: '2023-09-25', notas: '10' },
        { nome: 'Pedro Santos', ultimoLogin: '2024-02-19', tempoAcesso: '4 horas', dataInclusao: '2023-08-12', notas: '10' },
        { nome: 'Ana Pereira', ultimoLogin: '2024-02-18', tempoAcesso: '1 hora', dataInclusao: '2023-07-30', notas: '10' },
        { nome: 'João Silva Costa', ultimoLogin: '2024-02-21', tempoAcesso: '3 horas', dataInclusao: '2023-10-15', notas: '10' },
        { nome: 'Maria Oliveira', ultimoLogin: '2024-02-20', tempoAcesso: '2 horas', dataInclusao: '2023-09-25', notas: '10' },
        { nome: 'Pedro Santos', ultimoLogin: '2024-02-19', tempoAcesso: '4 horas', dataInclusao: '2023-08-12', notas: '10' },
        { nome: 'Ana Pereira', ultimoLogin: '2024-02-18', tempoAcesso: '1 hora', dataInclusao: '2023-07-30', notas: '10' }
      ],
      listaDeAnuncios: [
        { nome: 'Acesso aos Livros Eletrônicos - Biblioteca PUC Minas (Atualizado).', criadoEm: '2024-02-21', postadoEm: '2024-02-21', nomeAutor: 'Autor 1', conteudoMensagem: 'Prezados usuários,Com grande satisfação informamos que o sistema de consulta da Biblioteca foi atualizado, disponibilizandoinformações sobre livros e periódicos (físicos e eletrônicos), bases ' },
        { nome: 'Destaque Acadêmico 2023/2', criadoEm: '2024-02-20', postadoEm: '2024-02-20', nomeAutor: 'Autor 2', conteudoMensagem: 'Prezados alunos, boa tarde!Apresentamos o destaque acadêmico do curso Superior de Análise e Desenvolvimento de Sistemas do 2/2023!Parabéns, Fabiana Alkmim Avelar!!! 👏🎉' },
        { nome: 'Recesso Carnaval e quarta-feira de cinzas', criadoEm: '2024-02-19', postadoEm: '2024-02-19', nomeAutor: 'Autor 3', conteudoMensagem: 'Prezados alunos, boa tarde!Informamos que estaremos em recesso escolar, do corpo docente e administrativo entre os dias 10 a 13 de fevereiro, devido ao Carnaval e dia 14 de fevereiro' },
        ],
      listaDeForuns: [
        { nome: 'Transferência de turma', criadoEm: '2024-02-21', postadoEm: '2024-02-21', nomeAutor: 'Camila Cristina Gonçalves Marques De Moura', conteudoMensagem: 'Podemos fazer a transferência de turma sim. Peço que envie a solicitação pela caixa de entrada para registrarmos ok?', ultimaRespostaEm: '2024-02-21' },
        { nome: 'Informações sobre início das aulas e divisão de turmas', criadoEm: '2024-02-20', postadoEm: '2024-02-20', nomeAutor: 'Winnie Yvelise Brandao Moret', conteudoMensagem: 'Boa tarde, pessoal, sou Ernane aqui de BH. Não pude participar dos encontros síncronos. Alguém tem notícia do início das aulas, divisão de turmas, ou outras informações?', ultimaRespostaEm: '2024-02-20' },
        { nome: 'Fórum de dúvidas - Eixo: Empreendedorismo e Inovação com Sistemas de Software', criadoEm: '2024-02-19', postadoEm: '2024-02-19', nomeAutor: 'Autor 3', conteudoMensagem: 'Este espaço foi criado para ajudar você a solucionar suas dúvidas pontuais mais rapidamente. Através desta ferramenta seus questionamentos são respondidos diretamente pelos tutores.', ultimaRespostaEm: '2024-02-19' },
    ],
    listaDeAtividades: [
        { name: 'Atividade 1', },
        { name: 'Atividade 2', },
        { name: 'Atividade 3', },

      ],
      alunoExpandido: false,
      alunoIndex: null
    };
  },
  methods: {
    toggleInformacoes(index) {
        console.log("Aluno clicado:", this.listaDeAlunos[index]);
      if (this.alunoIndex === index) {
        this.alunoExpandido = !this.alunoExpandido;
      } else {
        this.alunoExpandido = true;
      }
      this.alunoIndex = index;
    }
  }
};
</script>