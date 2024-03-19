<template>
    <div></div>
</template>

<script>
export default {
    name: 'Callback',
    created() {
        this.$store.dispatch('getLogin', {
           api_token : this.$route.query.api_token,
           lms_token : this.$route.query.lms_token
        })
        this.$router.push('/home')
    }
}
</script>