<template>
  <v-container class="fill-height">
    <CreationPage />
  </v-container>
</template>

<script setup>
import { signIn } from '@/assets/api/auth';
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
onMounted(() => {
  signIn().then((data)=>router.push("/main"))
})
</script>