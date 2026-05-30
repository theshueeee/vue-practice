<script setup>
import {ref} from 'vue';

    const name = ref("Theshueraj");
    const status = ref("PLANNED");
    const tasks = ref(["task1", "task2", "task3"]);
    const newTask = ref("");
    const newName = ref("");

    const ToggleStatus = () => {
      if(status.value === "PLANNED"){
        status.value = "IN PROGRESS";
      } else if(status.value === "IN PROGRESS"){
        status.value = "PLANNED";
      }
    };

    const AddTask = () =>{
      tasks.value.push(newTask.value);
      newTask.value = "";
    };

    const ChangeName = () => {
      name.value = newName.value;
      newName.value = "";
    };
</script>



<template>
  <div v-if="status === 'PLANNED'">{{ name}}</div>

  <form @submit.prevent="AddTask">
    <label for="newTask">Add Task</label>
    <!-- As soon as you type anything onto the v-model here, it will be stored in newTask created above -->
    <input type="text" v-model="newTask" />
    <button type="submit">Add Task</button>
  </form>


  <form @submit.prevent="ChangeName">
    <p for="newName">Change Name</p>
    <input type = "text" v-model="newName">
    <button type="submit">Change Name</button>
  </form>


  <p>Tasks</p>
  <ul>
    <li v-for="task in tasks":key="task">{{ task }}</li>
  </ul>
  <div>{{ status }}</div>
  <button @click = "ToggleStatus">
    Change Status
  </button>
</template>


