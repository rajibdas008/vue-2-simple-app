import { createApp } from 'vue';
import App from './App.vue';
import  Contact from './components/Contact.vue';
import  ContactMsg from './components/ContactMsg.vue';


const vueApp = createApp(App);

vueApp.component('friend-contact', Contact); // Registering components
vueApp.component('friend-contact-msg', ContactMsg);

vueApp.mount('#app')
