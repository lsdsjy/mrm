module.exports = jest.fn();
module.exports.description = 'Taks 3.6';
module.exports.parameters = {
	'some-config': {
		type: 'input',
		message: 'Please, fulfil this interactive input',
	},
	'other-config': {
		type: 'input',
		message: 'Please, fulfil this second interactive input',
		default: 'default value',
	},
};
