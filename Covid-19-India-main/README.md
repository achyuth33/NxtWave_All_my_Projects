# Covid-19 India

Given two files `app.js` and a database file `covid19India.db` consisting of two tables `state` and `district`.

Write APIs to perform CRUD operations on the tables `state`, `district` containing the following columns,

**State Table**

| Columns    | Type    |
| ---------- | ------- |
| state_id   | INTEGER |
| state_name | TEXT    |
| population | INTEGER |

**District Table**

| Columns       | Type    |
| ------------- | ------- |
| district_id   | INTEGER |
| district_name | TEXT    |
| state_id      | INTEGER |
| cases         | INTEGER |
| cured         | INTEGER |
| active        | INTEGER |
| deaths        | INTEGER |

### API 1

#### Path: `/states/`

#### Method: `GET`

#### Description:

Returns a list of all states in the state table

#### Response

```
[
  {
    stateId: 1,
    stateName: "Andaman and Nicobar Islands",
    population: 380581
  },

  ...
]
```

### API 2

#### Path: `/states/:stateId/`

#### Method: `GET`

#### Description:

Returns a state based on the state ID

#### Response

```
{
  stateId: 8,
  stateName: "Delhi",
  population: 16787941
}
```

### API 3

#### Path: `/districts/`

#### Method: `POST`

#### Description:

Create a district in the district table, `district_id` is auto-incremented

#### Request

```
{
  "districtName": "Bagalkot",
  "stateId": 3,
  "cases": 2323,
  "cured": 2000,
  "active": 315,
  "deaths": 8
}
```

#### Response

```
District Successfully Added
```

### API 4

#### Path: `/districts/:districtId/`

#### Method: `GET`

#### Description:

Returns a district based on the district ID

#### Response

```
{
  districtId: 322,
  districtName: "Haveri",
  stateId: 36,
  cases: 2816,
  cured: 2424,
  active: 172,
  deaths: 220,
}
```

### API 5

#### Path: `/districts/:districtId/`

#### Method: `DELETE`

#### Description:

Deletes a district from the district table based on the district ID

#### Response

```
District Removed

```

### API 6

#### Path: `/districts/:districtId/`

#### Method: `PUT`

#### Description:

Updates the details of a specific district based on the district ID

#### Request

```
{
  "districtName": "Nadia",
  "stateId": 3,
  "cases": 9628,
  "cured": 6524,
  "active": 3000,
  "deaths": 104
}
```

#### Response

```

District Details Updated

```

### API 7

#### Path: `/states/:stateId/stats/`

#### Method: `GET`

#### Description:

Returns the statistics of total cases, cured, active, deaths of a specific state based on state ID

#### Response

```
{
  totalCases: 724355,
  totalCured: 615324,
  totalActive: 99254,
  totalDeaths: 9777
}

```

### API 8

#### Path: `/districts/:districtId/details/`

#### Method: `GET`

#### Description:

Returns an object containing the state name of a district based on the district ID

#### Response

```

{
  stateName: "Maharashtra"
}

```

<br/>

Use `npm install` to install the packages.

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**
