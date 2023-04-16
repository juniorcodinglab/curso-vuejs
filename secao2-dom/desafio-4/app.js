new Vue({
	el: '#desafio',
	data: {
		effect: false,
		startEffect: false,
		classe3: '',
		style5: '',
		progressWidth: 'width: 0%'
	},
	methods: {
		iniciarEfeito() {
			this.startEffect = true;
			setInterval(() => {
				this.effect = !this.effect;
			}, 1000);
		},
		iniciarProgresso() {
			let time = 0
			const meuInterval = setInterval(() => {

				this.progressWidth = 'width: ' + (time * 5) *  + "%";

				time++

				console.log(time)
			}, 500);

			setInterval(() => {
				if (time >= 20)
					clearInterval(meuInterval);
			}, 500);
		}
	},
	computed: {
		efeito1() {
			if(this.startEffect)
				return this.effect 
					? "destaque" : "encolher"
		}
	}
})
