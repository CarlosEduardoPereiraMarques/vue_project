<template>
    <div class="dual-list">
      <div class="list-container">
        <h2>Lista A</h2>
        <ul class="list" data-list="A">
          <li v-for="item in listA" :key="item.id" class="list-item" @click="selectItem(item)" :class="{ selected: isSelected(item) }">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="list-controls">
        <button @click="moveToB">Mover para B</button>
        <button @click="removeFromA">Remover de A</button>
        <button @click="clearA">Limpar A</button>
        <button @click="moveToA">Mover para A</button>
        <button @click="removeFromB">Remover de B</button>
        <button @click="clearB">Limpar B</button>
      </div>
      <div class="list-container">
        <h2>Lista B</h2>
        <ul class="list" data-list="B">
          <li v-for="item in listB" :key="item.id" class="list-item" @click="selectItem(item)" :class="{ selected: isSelected(item) }">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        listA: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' }
        ],
        listB: [
          { id: 4, name: 'Item 4' },
          { id: 5, name: 'Item 5' },
          { id: 6, name: 'Item 6' }
        ],
        selectedItem: null
      };
    },
    methods: {
      selectItem(item) {
        this.selectedItem = item;
      },
      isSelected(item) {
        return this.selectedItem === item;
      },
      moveItem(fromList, toList) {
        if (this.selectedItem) {
          toList.push(this.selectedItem);
          fromList.splice(fromList.indexOf(this.selectedItem), 1);
          this.selectedItem = null;
        }
      },
      moveToB() {
        this.moveItem(this.listA, this.listB);
      },
      removeFromA() {
        if (this.selectedItem) {
          this.listA.splice(this.listA.indexOf(this.selectedItem), 1);
          this.selectedItem = null;
        }
      },
      clearA() {
        this.listA = [];
        this.selectedItem = null;
      },
      moveToA() {
        this.moveItem(this.listB, this.listA);
      },
      removeFromB() {
        if (this.selectedItem) {
          this.listB.splice(this.listB.indexOf(this.selectedItem), 1);
          this.selectedItem = null;
        }
      },
      clearB() {
        this.listB = [];
        this.selectedItem = null;
      }
    }
  };
  </script>

  <style scoped>
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
    background-color: #b3d9ff; /* Cor de fundo para item selecionado */
  }
  </style>
