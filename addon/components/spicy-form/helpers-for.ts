import Component from '@ember/component';
import layout from './helpers-for.hbs';

const WithParams = Component.extend({}).reopenClass({
  positionalParams: ['fieldName'],
});

export default class HelpersFor extends WithParams {
  layout = layout;
}
