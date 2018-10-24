export class ObjectMapper {
  static deepCopy = (obj: any): any => {
    return JSON.parse(JSON.stringify(obj));
  }
}
