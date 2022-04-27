import { MessageEmbed } from "discord.js";
const yellow = '#f8de1e';

export const playCards = {
	success: (title, author, duration, thumbnail, url) => {
		return new MessageEmbed()
		.setColor(yellow)
		.setTitle(title)
		.setURL(url)
		.setDescription('Foi adicionado a fila com sucesso')
		.setAuthor({ name: author.name, iconURL: author.icon})
		.addFields(
			{ name: 'Duração da música', value: duration },
		)
		.setImage(thumbnail)
		.setTimestamp()
	},
	playing: (title = '', duration, url) => {
		return new MessageEmbed()
		.setColor(yellow)
		.setTitle(title)
		.setURL(url)
		.setDescription('Vai tocar a seguir no servidor 🔥🔥🔥🔥')
		.addFields(
			{ name: 'Duração da música', value: duration },
		)
	}
	
}

export const errorCards = {
	typo : () => {
		return new MessageEmbed()
		.setColor(yellow)
		.setTitle('❌ Parece que alguém digitou o comando errado, digite `.help` para mais informações sobre o djs. ❌ ')
	},

	permission : () => {
		return new MessageEmbed()
		.setColor(yellow)
		.setTitle('❌ Parece que eu não tenho permissão para entrar no canal de voz. ❌ ')
	},

	noChannel : () => {
		return new MessageEmbed()
		.setColor(yellow)
		.setTitle('❌ O usuário não está conectado em nenhum canal de voz. ❌ ')
	},
}

export const helpCommands = {
	help: () => {
		return new MessageEmbed()
		.setColor(yellow)
		.setTitle('Comandos do djs:')
		.setFields(
			{name: '.play `nome da música` ou .play `link do youtube`', value: '▶️ Você pode utilizar esse comando para tocar uma música.'},
			{name: '.stop', value: '⏹ Você pode utilizar esse comando para cancelar a lista e expulsar o djs.'},
			{name: '.pause', value: '⏸ Você pode utilizar esse comando para pausar a música que está tocando no momento.'},
			{name: '.skip', value: '📀 Você pode utilizar esse comando para pular para a música seguinte da lista.'},
			{name: '.queue', value: '📝 Você pode utilizar esse comando para ver a lista de músicas que irão tocar.'},
		)
	}
}