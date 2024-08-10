<template>
    <v-container class="fill-height">
        <v-responsive class="align-centerfill-height mx-auto">
            <h1 class="text-h2 text-md-h5 text-sm-h4 mb-4">Creation of Market</h1>
            <v-form @submit.prevent ref="myForm">
                <v-text-field v-model="name" :rules="rules" label="Market name"></v-text-field>
                <v-text-field v-model="botToken" :rules="rules" label="Bot token"></v-text-field>
                <v-text-field v-model="description" :rules="rules" label="Description (not important)"></v-text-field>
                <!-- <v-text-field v-model="firstName" :rules="rules" label="Phone number"></v-text-field>
                <v-text-field v-model="firstName" :rules="rules" label="Wallet Address"></v-text-field>
                <v-text-field v-model="firstName" :rules="rules" label="Image url"></v-text-field> -->
                <v-btn class="mt-2" type="submit" @click="check" block>Submit</v-btn>
            </v-form>
        </v-responsive>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { signUp } from '@/assets/api/auth';
const myForm = ref();
const name = ref('')
const botToken = ref('')
const check = () => {
    console.log("123")
    let market = {
        botToken: botToken.value,
        name: name.value,
        description: "string",
        phoneNumber: "string",
        walletAddress: "string",
        imageUrl: "string"
    }
    signUp(market).then(()=>router.push("/main"));
}
</script>