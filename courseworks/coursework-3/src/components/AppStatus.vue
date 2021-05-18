<template>
  <span :class="['badge', getClass()]">{{ getStatus() }}</span>
</template>

<script>
 export default {
   props: ['type'],
   setup(props) {
     function getStatus() {
       switch (props.type) {
         case 'done':
           return 'Выполнен'
         case 'active':
           return 'Активен'
         case 'cancel':
           return 'Отменен'
         case 'progress':
           return 'В работе'
       }
     }

     function getClass() {
       switch (props.type) {
         case 'done':
           return 'primary'
         case 'active':
           return 'primary'
         case 'cancel':
           return 'danger'
         case 'progress':
           return 'warning'
       }
     }

     return {
       getClass,
       getStatus
     }
   }
 }
</script>
