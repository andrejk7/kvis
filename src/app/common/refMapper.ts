import {Ref} from '../../types/ref';

export class RefMapper {
  static findIndex = (array: Array<Ref>, id: number): number => {
    return array.map((item: Ref) => item.id).indexOf(id);
  }

  static generateNextId = (array: Array<Ref>): number => {
    if (array.length === 0) { return 0; }

    // by default, next id is the next index in the array
    let candidateId: number = array.length;

    // sort in ascending order
    let ids = array.map((item: Ref) => item.id).sort((a: number, b: number) => a - b);

    while (ids.length) {
      const lastId = ids.pop();
      if (candidateId > lastId) { return candidateId; }
      if (candidateId === lastId) { candidateId--; }
    }
    return candidateId;
  }
}
