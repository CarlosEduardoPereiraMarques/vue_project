<template>
    <div class="p-[20px]">
      <div class="input-container flex justify-between items-center mb-4">
        <div class="w-1/6">
          <h1>Ano</h1>
          <input type="text" v-model="anoInput" class="bg-gray-250 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 hover:bg-gray-100 transition duration-300">
        </div>
        <div class="w-1/6">
          <h1>Semestre</h1>
          <input type="text" v-model="semestreInput" class="bg-gray-250 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 hover:bg-gray-100 transition duration-300">
        </div>
        <div class="w-2/5">
          <h1>Curso</h1>
          <select v-model="cursoInput" class="bg-gray-250 w-96 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-500 block p-2.5 hover:bg-gray-100 transition duration-300">
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>
            <option value="opcao3">Opção 3</option>
          </select>
        </div>
        <div class="w-1/6">
          <h1>Período</h1>
          <input type="text" v-model="periodoInput" class="bg-gray-250 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 hover:bg-gray-100 transition duration-300">
        </div>
        <div class="w-1/6 place-items-start">
          <button @click="pesquisar" class="inline-flex relative items-center py-[10px] px-[10px] bg-gray-600 text-white p-2 mt-6 rounded-md hover:bg-gray-400 transition duration-300">Filtrar</button>
        </div>
      </div>
      <div v-if="mostrarListas" class="dual-list">
        <div class="list-container">
          <div>
            <input type="text" placeholder="Procurar na lista A" v-model="filtroA" class="mt-8 bg-gray-250 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 hover:bg-gray-100 transition duration-300">
          </div>
          <h2 class="text-lg font-bold mb-4 text-center mt-4">Ambientes disponíveis</h2>
          <ul class="list" data-list="A" id="listA">
            <li class="list-item" v-for="(item, index) in ambientesDisponiveisFiltrados" :key="index" @click="selecionarItem(index)" :class="{ 'selected': indiceItemSelecionado === index }">{{ item }}</li>
          </ul>
        </div>
        <div class="list-controls mt-40">
          <button id="addAllButton" class="inline-flex relative items-center py-[10px] px-[10px] bg-gray-600 text-white p-2 mt-2 rounded-md hover:bg-gray-400 transition duration-300" @click="adicionarTodos">Adicionar todos</button>
          <button class="add-button inline-flex relative items-center py-[10px] px-[30px] bg-gray-600 text-white p-2 mt-2 rounded-md hover:bg-gray-400 transition duration-300" @click="adicionarSelecionados">Adicionar</button>
          <button id="removeButton" class="inline-flex relative items-center py-[10px] px-[30px] bg-gray-600 text-white p-2 mt-2 rounded-md hover:bg-gray-400 transition duration-300" @click="removerSelecionados">Remover</button>
        </div>
        <div class="list-container">
          <div>
            <input type="text" placeholder="Procurar na lista B" v-model="filtroB" class="mt-8 bg-gray-250 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 hover:bg-gray-100 transition duration-300">
          </div>
          <h2 class="text-lg font-bold mb-4 text-center mt-4">Ambientes selecionados</h2>
          <ul class="list" data-list="B" id="listB">
            <li class="list-item" v-for="(item, index) in ambientesSelecionadosFiltrados" :key="index" @click="selecionarItem(index)" :class="{ 'selected': indiceItemSelecionado === index }">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div>
        <button class="inline-flex relative items-center py-[10px] px-[30px] bg-gray-600 text-white p-2 mt-9 rounded-md hover:bg-gray-400 transition duration-300">Próximo</button>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        anoInput: '',
        semestreInput: '',
        cursoInput: '',
        periodoInput: '',
        mostrarListas: false,
        ambientesDisponiveis: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
        ambientesSelecionados: [],
        indiceItemSelecionado: null,
        filtroA: '',
        filtroB: ''
      };
    },
    computed: {
      ambientesDisponiveisFiltrados() {
        return this.ambientesDisponiveis.filter(item => item.toLowerCase().includes(this.filtroA.toLowerCase()));
      },
      ambientesSelecionadosFiltrados() {
        return this.ambientesSelecionados.filter(item => item.toLowerCase().includes(this.filtroB.toLowerCase()));
      }
    },
    methods: {
      pesquisar() {
        if (this.anoInput && this.semestreInput && this.cursoInput && this.periodoInput) {
          this.mostrarListas = true;
        }
      },
      selecionarItem(index) {
        this.indiceItemSelecionado = index;
      },
      adicionarTodos() {
        this.ambientesSelecionados = [...this.ambientesDisponiveis];
        this.ambientesDisponiveis = [];
      },
      adicionarSelecionados() {
        this.ambientesSelecionados.push(...this.ambientesDisponiveis.filter((item, index) => this.indiceItemSelecionado === index));
        this.ambientesDisponiveis = this.ambientesDisponiveis.filter((item, index) => this.indiceItemSelecionado !== index);
        this.indiceItemSelecionado = null;
      },
      removerSelecionados() {
        // Remove os itens selecionados da lista B e os adiciona de volta à lista A
        const selectedItems = document.querySelectorAll('#listB .list-item.selected');
        selectedItems.forEach(item => {
          const index = this.ambientesSelecionados.indexOf(item.innerText);
          if (index !== -1) {
            this.ambientesSelecionados.splice(index, 1);
            this.ambientesDisponiveis.push(item.innerText);
          }
        });

        // Ordena os itens na lista A em ordem crescente
        this.ambientesDisponiveis.sort();
      },
      // Seus outros métodos existentes aqui
    }
  };
  </script>

  <style scoped>
  .input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input-container div {
    flex: 1;
    margin-right: 10px;
  }

  .dual-list {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 20px;
  }

  .list-container {
    width: 400px;
  }

  .list-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .list {
    border: 1px solid #ccc;
    height: 200px;
    overflow-y: auto;
    padding: 5px;
  }

  .list-item {
    cursor: pointer;
    padding: 5px;
  }

  .list-item:hover {
    background-color: #f0f0f0;
  }

  .selected {
    background-color: #e2e8f0;
  }
  </style>
