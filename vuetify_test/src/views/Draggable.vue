<template>
  <div id="draggable">
    <h1>draggable</h1>
    <v-btn @click="isDraggable = !isDraggable">
      isDraggable: {{ isDraggable }}
    </v-btn>
    <v-btn @click="isResizable = !isResizable">
      isResizable: {{ isResizable }}
    </v-btn>
    <v-btn v-text="btnText" @click="display"></v-btn>

    <vue-draggable-resizable
      v-show="isshow"
      class="test"
      :x="200"
      :y="200"
      :parent="false"
      style="border: 1px solid black"
      :drag-cancel="'.cancel'"
      :draggable="isDraggable"
      :resizable="isResizable"
    >
      <!-- <div id="notDraggable" class="cancel">Cannot Drag Here</div> -->
    </vue-draggable-resizable>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

export default {
  components: { VueDraggableResizable },
  data: function () {
    return {
      isDraggable: true,
      isResizable: true,
      btnText: '隱藏',
      isshow: true
    }
  },
  methods: {
    display () {
      this.isshow = !this.isshow
      if (this.isshow) {
        this.btnText = '隱藏'
      } else {
        this.btnText = '顯示'
      }
    }
  }
}
</script>

<style>
#draggable {
  color: #2c3e50;
  border-style: solid;
  height: 500px;
  width: 500px;
  background: url('https://images.unsplash.com/photo-1642866081289-d8f60613a3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80')
}

.test {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('.././assets/未命名-1.png') no-repeat center/100%
}

#notDraggable {
  text-align: center;
  background-color: #ccc;
  border: 2px solid;
  width: 70%;
  height: 70%;
}
</style>
