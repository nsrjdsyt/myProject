<template lang="html">
    <div>
        <title title="welcome to todoList page"></title>
        <todo-list></todo-list>
    </div>
</template>

<script>
import Title from './../../components/Title.vue';
import TodoList from './components/TodoList';

export default {
    components:{
        Title,
        TodoList
    }
}
</script>
