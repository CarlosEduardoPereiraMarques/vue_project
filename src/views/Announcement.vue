<template>
    <div>
        <div class="bg-gray-400 bg-center bg-cover bg-no-repeat flex h-screen mx-auto text-black text-center flex-col min-w-full md:w-96 h-99 rounded-lg p-8">
            <form class="" @submit.prevent="handleSubmit">
                <label for="courses" class="block mb-2 text-sm font-medium text-gray-900">
                    <h1>Selecione um curso:</h1>
                </label>
                <select id="courses" v-model="selectedCourse"
                    class="bg-gray-250 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full p-2.5 hover:bg-gray-100 transition duration-300">
                    <option selected disabled value="">Escolha um curso</option>
                    <option v-for="course in courses" :key="course.id" :value="course.id">{{ course.name }}</option>
                </select>
                <label>Título do anúncio:</label>
                <input type="text">
                <label>Agendar anúncio:</label>
                <input type="datetime-local">
                <label for="body-message">Corpo da Mensagem:</label>
                <Editor v-model="value"></Editor>

                <button type="submit" class="bg-gray-600 text-white p-2 mt-2 rounded-md hover:bg-gray-400 transition duration-300"
                    v-if="selectedCourse !== ''">
                    Visualizar Dados
                </button>
            </form>
        </div>
    </div>
</template>

<script>

</script>