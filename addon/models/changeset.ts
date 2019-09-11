// Maybe take stuff from https://github.com/poteto/ember-changeset
//
//
//
// Todo: lookup the interface for Yup validators.
export class ChangeSet<PersistenceModel> {
  public data;
  private validator;

  constructor(persistenceModel: PersistenceModel, validator) {
    this.data = this.load(persistenceModel);
    this.validator = validator;
  }

  // what situations would we need to re-load the data?
  //  - if there is data in local storage, maybe this has
  //    some key we can use to pull things out of local storage
  //    and return a populated data object.
  load(persistenceModel: PersistenceModel) {
    return persistenceModel;
  }

  /**
   *  Will only write if the validator succeeds
   */
  write() {

  }


}
