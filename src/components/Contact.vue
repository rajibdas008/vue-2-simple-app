<template>
    <li>
        <p>{{friend.name}} => {{friend.mobile}}</p>
        <button @click="sendDataToParent()">click</button><br>
        <friend-contact-msg></friend-contact-msg>
    </li>
</template>

<script>
console.log('hii');
export default {
    props: {  // Receving the properties from parent component
        friend: {
            type: Object
        }
    },
    emits: ['sendHi'], // emiting variables registeed here. This is optional but good thing to follow so that any member of a team can easily understood what are the method are to be emit from this component
    data() {
        return {
            staticFriend: {
                name: 'abc',
                mobile: 1234
            }
        }
    },
    methods: {
        sendDataToParent(){
            this.$emit('sendHi', 'gdgdfg') // eiiting the method to parent component from child
        }
    }
}
</script>
