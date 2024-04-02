<template>
    <div></div>
</template>

<script>
import { Getter } from '../utils/APIHandler';

export default {
    name: 'Callback',
    created() {
        const apiKey = this.$route.query.api_token
        const lmsKey = this.$route.query.lms_token
        const expiresAt = this.$route.query.expires_at
        //const user = Getter('get_user_data')
        //this.$store.dispatch('setUserLMSData', user)
        this.$store.dispatch('getLogin', {
           api_token : apiKey,
           lms_token : lmsKey,
           expires_at: expiresAt
        })
        this.$router.push('/home')
    }
}
</script>