<template>
  <div class="mpvue-demo">
    <p class="title">{{title}}</p>
    <input type="text" v-model="mytodo"> <!-- 与mytodo进行双向绑定  表单内应用   替代bindInput -->
    <p>{{mytodo}}</p>
    <button @click="addTodo">加一条</button>
    <ul class="todos">
      <li v-key='i' v-for="(todo, i) in todos" @click="toggle(i)" :class="{'done':todo.done}">{{todo.text}}</li>
      <li>{{todoNum}}/{{todos.length}}</li>
    </ul>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      mytodo: '',
      title: 'Hello Mpvue',
      todos: [
        {text:'吃饭', done: false},
        {'text':'睡觉', done: false},
      ]
    }
  },

  components: {

  },

  computed: {
    todoNum () {
      return this.todos.filter(v => !v.done).length;
    }
  },
  methods: {
    addTodo () {
      var i= 0;
      console.log("添加了"+i);
      if (!this.mytodo) {
        return
      }
      this.todos.push({text:this.mytodo, done:false});
      this.mytodo = '';
    },
    toggle (i) {
      console.log('删除操作');
      //状态的切换
      this.todos[i].done = !this.todos[i].done;
    },
    
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.todos = [];
  }
}
</script>

<style scoped>
/* 单页面组件` */
.title {
  color: #ed12a3;
  text-align: center;
}
ul.todos {
  margin: 20px;
}
input {
  border: 2px solid #ed12a3;
}
.done {
  text-decoration: line-through;
}
</style>
