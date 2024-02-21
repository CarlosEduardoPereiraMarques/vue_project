<template>
    <div class="border-2 p-2 rounded mt-2">
        <div class="bg-gray-600 flex justify-between items-center" @click="toggleAccordion">
            <div class="text-gray-200 p-4 font-bold rounded cursor-pointer">{{ title }}</div>
            <div v-if="isOpen">
                <svg class="w-6 h-6 text-gray-800 mx-2" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m5 15 7-7 7 7" />
                </svg>
            </div>
            <div v-else>
                <svg class="w-6 h-6 text-gray-800 mx-2" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 9-7 7-7-7" />
                </svg>
            </div>
        </div>
        <div class="mt-4 p-2 rounded" :class="{ 'd-block': isOpen, 'hidden': !isOpen }">
            <slot :isOpen="isOpen" />
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            isOpen: false
        }
    },
    name: "Accordion",
    props: {
        title: String,
    },
    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>
