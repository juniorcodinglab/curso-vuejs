new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlertaBt(e) {
            alert("Botão Clickado!");
        },
        atualizarValor(e) {
            this.valor = e.target.value;
        }
    }
})
