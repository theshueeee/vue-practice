<script>
export default {
  data () {
    return {
      name : "Shawshank Redemption",
      status: "PLANNED",
      tasks : ['task1', 'task2', 'task3'],
    };
  },

  methods:{
    ToggleStatus(){
      if(this.status === "PLANNED"){
        this.status = "IN PROGRESS";
      } else if(this.status === "IN PROGRESS"){
        this.status = "PLANNED";
      }
    }
  }
};
</script>



<template>
  <div v-if="status === 'PLANNED'">{{ name}}</div>
  <p>Tasks</p>
  <ul>
    <li v-for="task in tasks":key="task">{{ task }}</li>
  </ul>
  <div>{{ status }}</div>
  <button @click = "ToggleStatus">
    Change Status
  </button>
</template>


