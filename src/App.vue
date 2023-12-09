<!-- App.vue -->

<template>
  <div id="app">
    <h1>Vue 3 Date Management</h1>
    <DateComponent />
  </div>
  </template>
  
  <script>
 import DateComponent from './components/DateComponent.vue';

  
  export default {
  components: {
    DateComponent,
  },
  };
  </script>
  
  <style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #5b198a;
  margin-top: 60px;
  }
  
  h1 {
  font-size: 2em;
  margin-bottom: 20px;
  }

  button{
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease

  }
  
 
  </style>
  