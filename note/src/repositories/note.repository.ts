import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsDataSource} from '../datasources';
import {Note, NoteRelations} from '../models';

export class NoteRepository extends DefaultCrudRepository<
  Note,
  typeof Note.prototype.id,
  NoteRelations
> {
  constructor(
    @inject('datasources.ds') dataSource: DsDataSource,
  ) {
    super(Note, dataSource);
  }
}
