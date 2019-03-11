var app = new Vue({
  el: '#app',
  data: {
    equation: " ",
    current: {
      operation: 'derive',
      expression: '',
      result: '',
    },
  },
  computed: {
    computationChoice() {
      return this.current.operation.toUpperCase();
    }
  },
  methods: {
    async mathSubmit() {
      this.loading = true;
      const response = await axios.get('https://newton.now.sh/' + this.current.operation + '/' + encodeURIComponent(this.equation));
      this.current = response.data;
      console.log(response.data);
      this.loading = false;
    },
    derivativeCalculator() {
      this.current.operation = "derive";
    },
    simplifyEquation() {
      this.current.operation = "simplify";
    },
    factorEquation() {
      this.current.operation = "factor";
    },
    integrationCalculator() {
      this.current.operation = "integrate";
    },
  }
})