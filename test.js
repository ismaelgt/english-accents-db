import test from 'ava'
import Ajv from 'ajv'

const ajv = new Ajv()
let data, schema

test.before('can parse data', t => {
  try {
    data = require('./english-accents')
    t.pass()
  } catch (e) {
    t.fail()
  }
})

test.before('can parse schema', t => {
  try {
    schema = require('./english-accents.schema')
    t.pass()
  } catch (e) {
    t.fail()
  }
})

test('data schema is valid', t => {
  if (ajv.validate(schema, data)) {
    t.pass()
  } else {
    t.fail(ajv.errorsText())
  }
})
