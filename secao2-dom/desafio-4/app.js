new Vue({
	el: '#desafio',
	data: {
		effect: false,
		startEffect: false,
		classe3: '',
		style5: '',
		width: '0'
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
				time += 5
				this.width = `${time}%`

				if (time === 100)
					clearInterval(meuInterval);

				console.log(time)
			}, 200);
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
