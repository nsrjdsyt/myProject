<template>
  <div>
      <h1>add todo list</h1>
      <p>
          add todo: <input type="text" v-model="msg" @keyup.enter="add">
      </p>
      <ul v-if="todoList && todoList.length">
          <li v-for="todo in todoList">{{$index+1}}: {{todo.text}}  <a href="javascript:;" @click="del($index)">删除</a></li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "",
            todoList:[]
        }
    },
    methods: {
        add(){
            let msg = this.msg.trim();

            if(msg){
                this.todoList.push({text: msg});
            }

            this.msg = "";
        },
        del(index){
            this.todoList.splice(index, 1);
        }
    }
}
</script>
