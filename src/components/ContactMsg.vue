<template>
    {{message}}

    <button @click="onShareMethodClick('hey share method!! how are you?')">Pass Share message</button>
    <!-- send message to the sharemethod -->
</template>
<script>
   export default {
       inject: ['message', 'onShareMethodClick'], // The sharevariable & shareMethod registered here
       data(){
           return {
               msg: 'hello'
           }
       }
   }
</script>
