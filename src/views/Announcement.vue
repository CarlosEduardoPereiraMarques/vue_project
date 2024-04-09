<template>
    <div>
        <div class="size-full md:size-auto bg-slate-300 bg-opacity-85 text-black text-center rounded-lg p-4">
            <form class="space-y-4" @submit.prevent="handleSubmit">
                <div>
                    <label for="courses" class="block mt-0 text-base font-medium text-gray-900">
                        <h1>Selecione um curso:</h1>
                    </label>
                    <select id="courses" v-model="selectedCourse"
                        class="bg-gray-250 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-500 block w-full p-2 hover:bg-gray-100 transition duration-300">
                        <option selected disabled value="">Escolha um curso</option>
                        <option v-for="course in courses" :key="course.id" :value="course.id">{{ course.name }}</option>
                    </select>
                </div>
                <div>
                    <label for="title" class="block mb-2 text-base font-medium text-gray-900">
                        Título do anúncio:
                    </label>
                    <input id="title" type="text" class="w-full bg-gray-250 border border-gray-300 rounded-lg focus:ring-gray-400 focus:border-gray-500 p-2 text-gray-900">
                </div>
                <div>
                    <label for="schedule" class="block mb-2 text-base font-medium text-gray-900">
                        Agendar anúncio:
                    </label>
                    <input id="schedule" type="datetime-local" class="w-64 bg-gray-250 border border-gray-300 rounded-lg focus:ring-gray-400 focus:border-gray-500 p-2 text-gray-900">
                </div>
                <div>
                    <label for="body-message" class="block mb-2 text-base font-medium text-gray-900">
                        Corpo da Mensagem:
                    </label>
                    <!-- Editor de texto -->
                    <div>
                        <Editor v-model="messageBody" editorStyle="height: 240px" class="max-w-full bg-white border border-gray-300 rounded-lg focus:ring-gray-400 focus:border-gray-500 p-2 text-gray-900" />
                    </div>
                </div>

                <button type="submit" class="bg-gray-600 text-white p-2 mt-2 rounded-md hover:bg-gray-400 transition duration-300"
                    v-if="selectedCourse !== ''">
                    Enviar
                </button>
            </form>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

</style>
