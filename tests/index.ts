import { FieldPath } from '../src'

interface IChildren {
  name: string
  age: number
}
enum ResultEnum {
  Success = 'success',
  Failure = 'failure',
}
interface IPerson {
  name: string
  age: number
  adress: {
    city: string
    street: string
  }
  children: IChildren[]
  nestedChildren: IChildren[][]
  extraNestedChildren: IChildren[][][]
  favoriteNames: ['Stepan', 'Karina']
  anyArrData: string[]
  result: ResultEnum
}

const index = 0
const getPersonProperty = (field: FieldPath<IPerson>) => {
  // used for example in lodash get _.get(path)
}

getPersonProperty('adress.city')
getPersonProperty(`children[${index}].name`)
getPersonProperty('anyArrData[0]')
getPersonProperty('nestedChildren[0][0]')
getPersonProperty('extraNestedChildren[0][0][0].name')
getPersonProperty('adress')
