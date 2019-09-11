ember-spicy-forms
==============================================================================

Helpers for universal form control.

Goals:
 - integration with validation libraries
 - able to be given some object that knows how to persistent state (to maybe local storage in case of browser refresh, or computer crash)
 - can be given a pojo
 - provide helpers for decoupling UI from the from.

Maybe Goals:
 - store history of change sets (would allow for undo)
 - multi stage forms?

API Ideas

```hbs
<SpicyForm
  @onSubmit={{this.doTheSubmit}}
  @data={{this.somePojo}}
  @validator={{this.yupValidator}}
as |form|>
  {{#form.helpersFor 'firstName' as |firstName|}}

    {{#if firstName.hasError}}
      {{firstName.error}}
    {{/if}}

    <label for={{firstName.fieldId}}>First name</label>
    <input
      id={{firstName.fieldId}}
      value={{firstName.value}}
      {{on 'input' firstName.onInput}}
    >

  {{/form.helpersFor}}

  {{#form.helpersFor 'hasNotifications' as |hasNotifications|}}

    <label for={{hasNotifications.fieldId}}>Enable Notifications?</label>

    <input
      type='checkbox'
      checked={{hasNotifications.checked}}
      {{on 'change' (pipe
        this.requestPermission
        (hasNotifications.withChangeset (perform this.doWork))
      ) }}
    >

  {{/form.helpersFor}}
</SpicyForm>
```

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v3.12 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-spicy-forms
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
