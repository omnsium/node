class Logger {
	constructor() {
		this.logs = [];
	}

	get count() {
		return this.logs.length;
	}

	log(message) {
		const timestamp = new Date().toISOString();
		this.logs.push({ message, timestamp });
	}
}

module.exports = new Logger();
