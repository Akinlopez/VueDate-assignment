// useDate.js

import { ref } from 'vue';

export function useDate() {
  const currentDate = ref(new Date());

  function setDate(newDate) {
    currentDate.value = newDate;
  }

  return {
    currentDate,
    setDate,
  };
}
