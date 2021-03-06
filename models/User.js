// User Model

import Vue from 'vue';

import { Model } from '@vuex-orm/core'
import Sample from "./Sample";
import Friend from "./Friend";

export default class User extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'users'

  static primaryKey = 'id';

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      id: this.attr(''),
      uuid: this.attr(''),
      suuid: this.attr(''),
      samples: this.hasMany(Sample, 'user_id', 'id'),
      friends: this.hasMany(Friend, 'user_id1', 'id')
    }
  }

}
