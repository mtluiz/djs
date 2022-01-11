# DJS

O DJS é um bot para Discord com a capacidade da criar playlists personalizadas, tendo como fonte a biblioteca de músicas do Youtube.

## Frameworks e Pacotes Utilizados

- [ffmpeg](https://www.npmjs.com/package/ffmpeg)
- [Discord.js](https://www.npmjs.com/package/discord.js?source=post_page-----7b5fe27cb6fa----------------------)
- [ytdl](https://www.npmjs.com/package/ytdl-core)

## Comandos Disponibilizados

#### Play

| Prefixo | Comando | Argumentos                                               |
| :------ | :------ | :------------------------------------------------------- |
| `.`     | `play`  | Nome da música que o usuário deseja pesquisar no youtube |

#### Stop

| Prefixo | Comando | Argumentos                                                      |
| :------ | :------ | :-------------------------------------------------------------- |
| `.`     | `stop`  | Comando para apagar playlist e fazer o bot sair do canal de voz |

#### Skip

| Prefixo | Comando | Argumentos                              |
| :------ | :------ | :-------------------------------------- |
| `.`     | `skip`  | Avança a playlist para a próxima musica |

#### Queue

| Prefixo | Comando | Argumentos                                                           |
| :------ | :------ | :------------------------------------------------------------------- |
| `.`     | `queue` | Mostra todas as músicas que serão tocadas na lista do servidor atual |
