<script setup>
import {ref, onMounted} from 'vue';

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

    const deleteTask=(index) => {
      tasks.value.splice(index, 1);
    }

    onMounted(async () => {
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        tasks.value = data.map((task) => task.title);
      } catch (error){
        console.error(error);
      };
    });
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
    <li v-for="(task,index) in tasks":key="task">
      <span>
        {{ task }}
      </span>
      <button @click="deleteTask(index)">Delete</button>
    </li>
  </ul>
  <div>{{ status }}</div>
  <button @click = "ToggleStatus">
    Change Status
  </button>
</template>


