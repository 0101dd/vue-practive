```javascript
<template>
  <div id="app">
    <button @click="isDraggable = !isDraggable">
      isDraggable: {{ isDraggable }}
    </button>
    <button @click="isResizable = !isResizable">
      isResizable: {{ isResizable }}
    </button>
    <button v-text="btnText" @click="display"></button>

    <vue-draggable-resizable
      v-show="isshow"
      class="test"
      :x="200"
      :y="200"
      :parent="true"
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
export default {
  name: "App",
  components: {},
  data: function () {
    return {
      isDraggable: true,
      isResizable: true,
      btnText: "隱藏",
      isshow: true,
    };
  },
  methods: {
    display() {
      this.isshow = !this.isshow;
      if (this.isshow) {
        this.btnText = "隱藏";
      } else {
        this.btnText = "顯示";
      }
    },
  },
};
</script>

<style>
#app {
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
  background: url('https://images.unsplash.com/photo-1642866081289-d8f60613a3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80') no-repeat center/100%
}

#notDraggable {
  text-align: center;
  background-color: #ccc;
  border: 2px solid;
  width: 70%;
  height: 70%;
}
</style>

```