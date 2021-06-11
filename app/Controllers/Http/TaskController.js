'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
  project() {
    return this.belongsTo('App/Models/Project');
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  file() {
    return this.belongsTo('App/Models/File');
  }
}

module.exports = TaskController
