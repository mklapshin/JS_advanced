Vue.component("some-component", {
  template: "<h1>{{name}} {{surname}}</h1>",
  props: ['name', 'surname'],
});

const app = new Vue({
  el: "#app",
  data: {
    secondName: 'Mikhail',
    secondSurname: 'Lapshin'
  }
});
