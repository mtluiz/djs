import { MessageEmbed } from "discord.js";

export const playCards = {
	success: (title, author, duration, thumbnail, url) => {
		return new MessageEmbed()
		.setColor('#f8de1e')
		.setTitle(title)
		.setURL(url)
		.setDescription('Foi adicionado a fila com sucesso')
		.setAuthor({ name: author.name, iconURL: author.icon})
		.addFields(
			{ name: 'Duração da música', value: duration },
		)
		.setImage(thumbnail)
		.setTimestamp()
	}
	
}

export const errorCards = {
	typo : () => {
		return new MessageEmbed()
		.setColor('#f8de1e')
		.setTitle('❌ Parece que alguém digitou o comando errado, digite `.help` para mais informações sobre o djs. ❌ ')
	},

	permission : () => {
		return new MessageEmbed()
		.setColor('#f8de1e')
		.setTitle('❌ Parece que eu não tenho permissão para entrar no canal de voz. ❌ ')
	},

	noChannel : () => {
		return new MessageEmbed()
		.setColor('#f8de1e')
		.setTitle('❌ O usuário não está conectado em nenhum canal de voz. ❌ ')
	},
}
