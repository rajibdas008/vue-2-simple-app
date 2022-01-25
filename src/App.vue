<template>
<h1>{{ headerText }}</h1>
<h2>Friends</h2>
<ul>
  <friend-contact v-for="friend in friends" :key="friend.id" :friend="friend" @send-hi="listenToChild($event)"></friend-contact> 
  <!-- 
    v-for use for loop in template/html element
    sending data from parent to child binding the element by ":" sign
   -->
</ul>
</template>

<script>
export default {
  data(){ // add all the variables
    return {
      friends: [
        {
          name: 'abc',
          mobile: 1234
        },
        {
          name: 'xyz',
          mobile: 4567
        }
      ],
      headerFirstText: 'This is',
      headerLastText: 'vue app'
    }
  },
  computed: { // like a getter method (get methodName(){...}). It will be used as a variable rather than a method.
    headerText(){
      return `${this.headerFirstText} ${this.headerLastText}`
    }
  },
  // provide: { // It acts as a provide or share bucked throught the applicaition
  //   message: 'This is a share message..'
  // },
  provide(){ // It acts as a provide or share backend throught the applicaition with this component variable passing advantage
    return {
      friend: this.friends,
      message: 'This is a share message..',
      onShareMethodClick: this.shareMethodClick
    }
  },
   methods: { // add all the methods
    listenToChild(event){
       console.log(event);
    },

    shareMethodClick(value){  //this method used as a share method from contactMsg component
      console.log(value);
    }
  }

}
</script>
