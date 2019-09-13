import Component from '@glimmer/component';
import layout from '../templates/components/spicy-form';

type Args =
  {
    form?: unknown;
    validator?: unknown;
    onSubmit?: () => Promise<void>;
  }
  |
  {
    changeset?: unknown;
  }
;

export default class SpicyForm extends Component<Args> {
  layout = layout
}
