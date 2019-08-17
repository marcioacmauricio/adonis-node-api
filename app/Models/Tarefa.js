'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tarefa extends Model {
	users() {
		return this.belongsTo('App/Models/User')
	}
	arquivos() {
		return this.belongsTo('App/Models/Arquivo')
	}
}

module.exports = Tarefa
