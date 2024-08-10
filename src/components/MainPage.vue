<template>
    <v-container class="fill-height">
        <div>Main Page after successful login</div>
    </v-container>
</template>

<script setup>
import { signIn } from '@/assets/api/auth';
import { getMarketById } from '@/assets/api/market';
import { ref, onMounted } from 'vue'

let market = ref();
onMounted(()=>{
    getMarketById().then((data)=>data.data).then(markets=>market.value=markets[0])
})
</script>