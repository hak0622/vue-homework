<template>
  <div>
    <h3>당신이 경험한 프론트 기술? (첫번째 :Slot 사용(x))</h3>
    <CheckBox1
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :label="item.label"
      :checked="item.checked"
      @check-changed="CheckBoxChanged"
    />
  </div>
</template>

<script>
import CheckBox1 from './CheckBox1.vue';

export default {
  name: 'NoslotTest',
  components: { CheckBox1 },
  data() {
    return {
      items: [
        { id: 'V', checked: true, label: 'vue' },
        { id: 'A', checked: false, label: 'Angular' },
        { id: 'R', checked: false, label: 'React' },
        { id: 'S', checked: false, label: 'Svelte' },
      ],
    };
  },
  methods: {
    CheckBoxChanged(e) {
      let item = this.item.find((item) => item.id === e.id);
      item.checked = e.checked;
    },
  },
};
</script>
<style lang=""></style>
