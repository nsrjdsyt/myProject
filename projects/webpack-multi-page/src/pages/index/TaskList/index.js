import taskListTpl from './index.tpl'

class TaskList {
  constructor(option){
    this.container = option.container
    this.data = option.data || {}
  }

  init(){
    this.render()
  }

  render(){
    this.container && this.container.html(taskListTpl({
      data: this.data
    }))
  }
}

export default TaskList
