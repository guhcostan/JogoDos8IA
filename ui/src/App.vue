<template lang="pug">
	#app
		p(v-if="melhorJogada.numeroJogadas") Numero de passos: {{melhorJogada.numeroJogadas - 1}}
		p(v-else) Carregando ...

		p(v-if="melhorJogada.numeroJogadas") Passo: {{matriz.numero}}
		.jogo
			.linha(v-for="linha in matriz")
				.bloco(v-for="bloco in linha" :class="{player: bloco === 0}")
					p {{bloco}}
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import IA from './assets/IA/IA'

export default {
	name: 'app',
	components: {
		HelloWorld
	},
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
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;


		.jogo{
			width: fit-content;
			margin: 0 auto;
		}
		.linha{
			display: flex;


			.bloco{
				border: solid black;
				width: 40px;
			}
		}

		.player{
			margin: auto 0;
			height: 100%;
			background-color: red;
		}
	}
</style>
