import { SteveCommand } from '@lib/structures/commands/SteveCommand';
import { CommandStore, KlasaMessage } from 'klasa';
import { Message } from 'discord.js';
import { NAME } from '@root/config';

export default class extends SteveCommand {

	public constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			description: `Have ${NAME} toss a coin for you.`,
			aliases: ['headsortails'],
			usage: '<thing:string>',
		});
	}

	public async run(msg: KlasaMessage, result: string[]): Promise<Message> {
		const results = ['heads', 'tails']

		return msg.channel.send(`${this.client.user.username} flips... ${result[Math.floor(Math.random() * results.length)]}!`);
	}
}
