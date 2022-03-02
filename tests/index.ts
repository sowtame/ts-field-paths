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
  favoriteNames: ['Stepa', 'Karina', 'Katy']
  anyArrData: string[]
  result: ResultEnum
}

const index = 0
const testPersonPathFIeld = (field: FieldPath<IPerson>) => {}

testPersonPathFIeld(`children[${index}].name`)
testPersonPathFIeld(`anyArrData[0]`)
testPersonPathFIeld('nestedChildren[0][0]')
testPersonPathFIeld('extraNestedChildren[0][0][0].name')
testPersonPathFIeld('adress')
