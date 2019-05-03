<template lang="pug">
	#app
		p(v-if="melhorJogada.numeroJogadas") Numero de passos: {{melhorJogada.numeroJogadas - 1}}
		p(v-else) Carregando ...

		p(v-if="melhorJogada.numeroJogadas") Passo: {{matriz.numero}}
		.jogo(v-if="melhorJogada.numeroJogadas")
			.linha(v-for="linha in matriz")
				.bloco(v-for="bloco in linha" :class="{player: bloco === 0}")
					p {{bloco}}
</template>

<script>

import IA from './assets/IA/IA';

export default {
	name: 'app',
	data: function () {
		return {
			matriz: [],
			melhorJogada: {
				numeroJogadas: null,
				jogadas: [],
				matrizInicial: []
			}
		}

	},
	mounted() {
		var that = this
		IA.StartIa().then(async function (result) {
			that.melhorJogada = result

			for (var n = 0; n < that.melhorJogada.numeroJogadas; n++) {
				that.matriz = that.melhorJogada.jogadas[n]
				that.matriz.numero = n;
				await that.sleep(1000);
			}
		})
	},
	methods: {
		sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		}
	}
}
</script>

<style lang="scss">
	$--color-primary: #8844EE;
	$--color-text: #C2C6D3;
	$--color-bg: #26353E;

	@import url('https://fonts.googleapis.com/css?family=Raleway');

	html, body {
		background-color: $--color-bg;
		width: 100%;
		height: 95%;
		padding: 0;
		margin: 0;
	}

	#app {
		font-family: 'Raleway', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: $--color-text;
		background-color: $--color-bg;
		width: 100%;
		height: 100%;
		font-size: 28px;


		.jogo{
			margin: 0 auto;
			width: 40%;
			height: 60%;
			background-color: white;
			border-radius: 4px;
			box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
			color: black;
			border: $--color-primary 10px solid;
		}
		.linha{
			display: flex;
			height: 33.3333333%;
			justify-content: center;
			align-items: center;


			.bloco{
				width: 33.33333%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28px;
				border: rgba(194, 198, 211, 0.42) 2px solid;
			}
		}

		.player{
			margin: auto 0;
			background-color: $--color-primary;
			color: white;
			font-weight: bold;
			font-size: 50px !important;
			border: $--color-bg 5px solid !important;
			z-index: 1000;
		}
	}
</style>
