import { objectCamelizer, normalizeArray } from "./index"

const anyCaseObject = {
  snake_case: 1,
  Train_Case: 1,
  multiple_words_prop_name: 1,
  "kebab-case": 1,
  "point.splitted": 1
}

const camelCaseObject = {
  snakeCase: 1,
  trainCase: 1,
  multipleWordsPropName: 1,
  kebabCase: 1,
  pointSplitted: 1
}

describe("object camelizer test", () => {
  it("object with different cases", () => {
    expect(objectCamelizer(anyCaseObject)).toEqual(camelCaseObject)
  })
  it("camelCased object camelize", () => {
    expect(objectCamelizer(camelCaseObject)).toEqual(camelCaseObject)
  })
  it("empty object", () => {
    expect(objectCamelizer({})).toEqual({})
  })
})

describe("collection normalize test", () => {
  const arrayToNormalize = [
    { id: "id1", name: "John" },
    { id: "id2", name: "Eva" },
    { id: "id3", name: "Bob" }
  ]
  it("correct collection", () => {
    const [first, second, third] = arrayToNormalize
    const expectedObject = {
      data: {
        [first.id]: first,
        [second.id]: second,
        [third.id]: third
      },
      ids: [first.id, second.id, third.id]
    }
    expect(normalizeArray(arrayToNormalize)).toEqual(expectedObject)
  })
  it("empty collection", () => {
    expect(normalizeArray([])).toEqual({ data: {}, ids: [] })
  })
})
