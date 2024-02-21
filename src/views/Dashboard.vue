<template>
    <form class="max-w-sm mx-auto" @submit.prevent="handleSubmit">
        <label for="courses" class="block mb-2 text-sm font-medium text-gray-900">
            <h1>Selecione um curso:</h1>
        </label>
        <select id="courses" v-model="selectedCourse"
            class="bg-gray-250 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 hover:bg-gray-100 transition duration-300">
            <option selected disabled value="">Escolha um curso</option>
            <option v-for="course in courses" :key="course.id" :value="course.id">{{ course.name }}</option>
        </select>

        <button type="submit" class="bg-gray-600 text-white p-2 mt-2 rounded-md hover:bg-gray-400 transition duration-300"
            v-if="selectedCourse !== ''">
            Visualizar Dados
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            selectedCourse: '',
            courses: [
                { id: 1, name: 'Curso 1' },
                { id: 2, name: 'Curso 2' },
            ],
        };
    },
    methods: {
        handleSubmit() {
            // fazer uma requisição na api para retornar os dados para a proxima página
            this.$router.push('/dashboard-data')
        },
    },
};
</script>
