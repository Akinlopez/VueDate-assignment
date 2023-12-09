<!-- DateComponent.vue -->

<template>
    <div>
      <p>Current Date: {{ currentDate }}</p>
      <button @click="incrementDate">Increment Date</button>
    </div>
    </template>
    
    <script>
    import { useDate } from '../composables/useDate';

    
    export default {
    setup() {
      const { currentDate, setDate } = useDate();
    
      function incrementDate() {
        const newDate = new Date(currentDate.value);
        newDate.setDate(newDate.getDate() + 1);
        setDate(newDate);
      }
    
      return {
        currentDate,
        incrementDate,
      };
    },
    };
    </script>

<style>

</style>
    