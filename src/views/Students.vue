<template>
    <div>
      <h1 class="text-2xl font-bold mb-4">Alunos:</h1>
      <div class="flex mt-2 gap-4 px-8">
        <div class="mt-2 flex gap-4">
            <button @click="showAbsentStudents = true" class="relative items-center py-[10px] px-[10px] bg-gray-600 text-white p-2 mr-4 rounded-md hover:bg-gray-400 transition duration-300">Ausentes há mais de 15 dias</button>
        </div>
        <div class="select-container flax flex-row-reverse">

          <div class="mt-2 flex gap-4">
            <div class="mt-2 flex gap-4">
            <select  class="bg-gray-250 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 hover:bg-gray-100 transition duration-300">
              <option>Período padrão</option>
              <option>Todos os períodos</option>
              <option>Graduação Presencial Síncrona - 2024/1</option>
              <option>Pós-graduação EAD - 2024</option>
            </select>
            </div>
            <div class="mt-2 flex gap-4">
              <select class="bg-gray-250 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 hover:bg-gray-100 transition duration-300">
              <option>Selecione um ambiente...</option>
              <option>Graduação Presencial Síncrona - 2024/1</option>
              <option>Pós-graduação EAD - 2024</option>
            </select>
            <button class="relative flax items-center py-[10px] px-[10px] bg-gray-600 text-white p-2 mr-4 rounded-md hover:bg-gray-400 transition duration-300">Buscar</button>
            </div>
            <div class="mt-2 flex gap-4">
               <label class="block text-sm font-medium leading-6 text-gray-900"></label>
                    <div class="mt-2">
                       <input type="text" placeholder="Digite o nome do aluno" class="bg-gray-250 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 hover:bg-gray-100 transition duration-300">
                    </div>
                    <button class="relative flax items-center py-[10px] px-[10px] bg-gray-600 text-white p-2 mr-4 rounded-md hover:bg-gray-400 transition duration-300">Buscar</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Lista de alunos ausentes -->
      <div v-if="showAbsentStudents" class="px-8 mt-4">
      <h2 class="text-lg font-medium">Alunos Ausentes há mais de 15 dias:</h2>
      <table class="mt-2 w-full border-collapse border border-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2">Nome do Aluno</th>
            <th class="px-4 py-2">Último Acesso</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(aluno, index) in listaDeAlunosAusentes" :key="index">
            <td class="border px-4 py-2">{{ aluno.aluno }}</td>
            <td class="border px-4 py-2 text-center">{{ aluno.ultimoAcesso }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="px-8 mt-4">
    <table class="mt-2 w-full border-collapse border border-gray-200">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2">Nome</th>
          <th class="px-4 py-2">Matrícula</th>
          <th class="px-4 py-2">Data da Matrícula</th>
          <th class="px-4 py-2">Eixo</th>
          <th class="px-4 py-2">Turma</th>
          <th class="px-4 py-2">Telefone</th>
          <th class="px-4 py-2">Email</th>
          <th class="px-4 py-2">Último Acesso</th>
          <th class="px-4 py-2">Disciplinas Matriculadas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(aluno, index) in listaDeAlunos" :key="index">
          <td class="border px-2 py-2">{{ aluno.nome }}</td>
          <td class="border px-2 py-2">{{ aluno.matricula }}</td>
          <td class="border px-2 py-2">{{ aluno.dataMatricula }}</td>
          <td class="border px-2 py-2">{{ aluno.eixo }}</td>
          <td class="border px-2 py-2">{{ aluno.turma }}</td>
          <td class="border px-2 py-2">{{ aluno.telefone }}</td>
          <td class="border px-2 py-2">
            <div class="select-container">
                    <label class="block text-sm font-medium leading-6 text-gray-900"></label>
                    <div class="mt-1">
                        <select class="bg-gray-250 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 hover:bg-gray-100 transition duration-300">
                            <option v-for="email in aluno.email" :key="email">{{ email }}</option>
                        </select>
                    </div>
                </div>
            </td>
          <td class="border px-4 py-2">{{ aluno.ultimoAcesso }}</td>
          <td class="border px-4 py-2">
                <div class="select-container">
                    <label class="block text-sm font-medium leading-6 text-gray-900"></label>
                    <div class="mt-1">
                        <select class="bg-gray-250 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 hover:bg-gray-100 transition duration-300">
                            <option v-for="disciplina in aluno.disciplinasMatriculadas" :key="disciplina">{{ disciplina }}</option>
                        </select>
                    </div>
                </div>
         </td>
        </tr>
      </tbody>
    </table>
  </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        showAbsentStudents: false,
        showDelayedActivities: false,
        listaDeAlunosAusentes: [
        { aluno: 'Aluno 1', ultimoAcesso: '2024-02-15 08:30' },
        { aluno: 'Aluno 2', ultimoAcesso: '2024-02-14 14:20' },
        { aluno: 'Aluno 3', ultimoAcesso: '2024-02-13 10:45' }
      ],
      listaDeAlunos: [
        {
          nome: 'Arnaldo Cesar Coelho',
          matricula: '000000',
          dataMatricula: '26-11-2000',
          eixo: 'Eixo 80',
          turma: 'Turma 08',
          telefone: '31-9999-9999',
          email: ['arnaldoCoelho@globo.com', 'arnaldoCoelho@gmail.com.br'],
          ultimoAcesso: '2024-02-13 10:45',
          disciplinasMatriculadas:['Administração Financeira (2024)','Google','Administração Financeira (2024)','Google']
        },
        {
          nome: 'Maria da Silva',
          matricula: '123456',
          dataMatricula: '10-05-2005',
          eixo: 'Eixo 50',
          turma: 'Turma 05',
          telefone: '31-8888-8888',
          email: ['maria.silva@email.com'],
          ultimoAcesso: '2024-02-20 09:30',
          disciplinasMatriculadas:['Administração Financeira (2024)','Google']
        },
        {
          nome: 'José Oliveira',
          matricula: '987654',
          dataMatricula: '15-08-2010',
          eixo: 'Eixo 30',
          turma: 'Turma 12',
          telefone: '31-7777-7777',
          email: ['jose.oliveira@email.com'],
          ultimoAcesso: '2024-02-18 15:20',
          disciplinasMatriculadas:['Administração Financeira (2024)','Google']
        },
        {
          nome: 'Ana Santos',
          matricula: '654321',
          dataMatricula: '03-12-2018',
          eixo: 'Eixo 20',
          turma: 'Turma 03',
          telefone: '31-6666-6666',
          email: ['ana.santos@email.com'],
          ultimoAcesso: '2024-02-22 11:10',
          disciplinasMatriculadas:['Administração Financeira (2024)','Google']
        },
        {
          nome: 'Carlos Pereira',
          matricula: '111222',
          dataMatricula: '20-03-2015',
          eixo: 'Eixo 40',
          turma: 'Turma 07',
          telefone: '31-5555-5555',
          email: ['carlos.pereira@email.com'],
          ultimoAcesso: '2024-02-25 14:45',
          disciplinasMatriculadas:['Administração Financeira (2024)','Google']
        },
      ]

      };
    }
  };
  </script>

  <style scoped>
  .flex-row {
    display: flex;
    align-items: center;
  }

  .select-container {
    margin-left: 10px;
  }
  </style>
