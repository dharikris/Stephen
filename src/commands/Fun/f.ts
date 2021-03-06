import { SteveCommand } from '@lib/structures/commands/SteveCommand';
import { CommandStore, KlasaMessage } from 'klasa';
import { Message } from 'discord.js';
import { oneLine } from 'common-tags';

export default class extends SteveCommand {

	public constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			cooldown: 60,
			cooldownLevel: 'channel',
			description: 'Press F to pay respects.'
		});
	}

	public async run(msg: KlasaMessage): Promise<Message> {
		return msg.channel.send(oneLine`[Image Description: A screenshot of a cutscene from Call of Duty: Advanced Warfare, showing a US Marine's
			funeral. A quick-time-event prompt is showing, saying "Press F to pay respects."]`,
		{ files: [{ attachment: './assets/images/f.png', name: 'pay_respects.png' }] });
	}

}
