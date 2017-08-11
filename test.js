import test from 'ava'

let json, countryKeys

test.before('is valid JSON', t => {
  try {
    json = require('./english-accents')
    countryKeys = Object.keys(json.countries)
    t.pass()
  } catch (e) {
    t.fail()
  }
})

test('countries are valid', t => {
  for (const key in json.countries) {
    t.not(json.countries[key].flag, undefined)
    t.not(json.countries[key].name, undefined)
    t.not(json.countries[key].order, undefined)
    t.not(json.countries[key].published, undefined)
    t.not(json.countries[key].zoom, undefined)
  }
})

test('accents are valid', t => {
  for (const key in json.accents) {
    t.not(json.accents[key].country, undefined)
    t.not(json.accents[key].name, undefined)
    t.true(countryKeys.indexOf(json.accents[key].country) !== -1)
    t.true(json.accents[key].videos.length > 0)
  }
})
