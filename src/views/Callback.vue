<template>
    <div></div>
</template>

<script>
import { Getter } from '../utils/APIHandler';

export default {
    name: 'Callback',
    async created() {
        const apiKey = this.$route.query.api_token
        const lmsKey = this.$route.query.lms_token
        const refreshLmsKey = this.$route.query.refresh_token
        const expiresAt = this.$route.query.expires_at
        this.$store.dispatch('getLogin', {
           api_token : apiKey,
           lms_token : lmsKey,
           refresh_token: refreshLmsKey,
           expires_at: expiresAt
        })
        const user = await Getter('user-data/')
        this.$store.dispatch('setUserLMSData', user)
        this.$router.push('/home')
    }
}
</script>