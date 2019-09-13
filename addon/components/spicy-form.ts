import Component from '@glimmer/component';
import layout from '../templates/components/spicy-form';

type Task<Args, Return> = unknown; // e-concurrency Task tbd;
type ChangeSet = unknown; // details tbd;
type OnSubmitFn = (changeSet: ChangeSet) => Promise<void>;
type OnSubmitTask = Task<[ChangeSet], void>;

type Args =
  {
    form?: unknown;
    validator?: unknown;
    onSubmit?: OnSubmitTask | OnSubmitFn;
  }
  |
  {
    changeset?: ChangeSet;
    onSubmit?: OnSubmitTask | OnSubmitFn;
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
