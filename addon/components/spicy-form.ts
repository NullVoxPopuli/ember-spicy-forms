import Component from '@glimmer/component';
import layout from '../templates/components/spicy-form';

type ChangeSet = unknown; // details tbd;

// deliberately not a task, cause the caller should manage
// the intermediate state
type OnSubmitFn = (changeSet: ChangeSet) => void;

type Args =
  {
    form?: unknown;
    validator?: unknown;
    onSubmit?: OnSubmitFn;
  }
  |
  {
    changeset?: ChangeSet;
    onSubmit?: OnSubmitFn;
  }
;

export default class SpicyForm extends Component<Args> {
  layout = layout

  get changeset() {
    // not sure yet what should be here, or if it even needs
    // to be different from the passed in changeset
    return;
  }

  /*
   * @(task(function*(){
   *   yield this.args.onSubmit(this.changeset);
   * }).drop());
   * onSubmit
   *
   */
}
