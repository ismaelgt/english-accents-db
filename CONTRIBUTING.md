# Contributing

1. Fork and clone this repo
1. Install dependencies: `npm i`
1. Add an accent to [english-accents.json](english-accents.json)
1. Run the tests to check everything is fine: `npm t`
1. Create a Pull Request

Alternatively, create an Issue adding details about the accent.

## Adding an accent

An accent entry looks like this:

```
"arizona": {
  "coords": {
    "lat": 34.304337,
    "lng": -111.614609
  },
  "country": "us",
  "name": "Arizona",
  "videos": ["jusOFxVfjjI", "r2vM04zuO90"]
}
```

### Fields

- `cords`: Coordinates in latitude / longitude
- `country`: Country id. Options, for now, are these ones
(create an issue if you want to add accents for a different country):
  - `gb`: United Kingdom
  - `us`: United States
  - `ie`: Ireland
  - `au`: Australia
  - `nz`: New Zealand
- `name`: Name of the city / town / place
- `videos`: An array of YouTube video ids

A Schema JSON spec is also available [here](english-accents.schema.json).
