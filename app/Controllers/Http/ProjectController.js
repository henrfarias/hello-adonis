'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with projects
 */
class ProjectController {
  user() {
    return this.belongsTo('App/Models/User');
  }

  tasks() {
    return this.hasMany('App/Model/Task');
  }
}

module.exports = ProjectController
