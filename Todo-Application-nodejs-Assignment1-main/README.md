# Todo Application

Given an `app.js` file and database file `todoApplication.db` with a table `todo`.

Write APIs to perform operations on the table `todo`, with the following columns,

**Todo Table**

| Column   | Type    |
| -------- | ------- |
| id       | INTEGER |
| todo     | TEXT    |
| category | TEXT    |
| priority | TEXT    |
| status   | TEXT    |
| due_date | DATE    |

<MultiLineNote>
  
  - Replace the spaces in URL with `%20`.
  - Possible values for `priority` are `HIGH`, `MEDIUM`, and `LOW`.
  - Possible values for `status` are `TO DO`, `IN PROGRESS`, and `DONE`.
  - Possible values for `category` are `WORK`, `HOME`, and `LEARNING`.
  - Use the format `yyyy-MM-dd` for formating with date-fns `format` function.
    - The user may request with due date value as `2021-1-21`, format the date to `2021-01-21` and perform Create, Read, Update operations on the database.
</MultiLineNote>

<MultiLineQuickTip>

Use `date-fns` format function to format the date. Refer to the documentation [link](https://date-fns.org/v2.19.0/docs/Getting-Started) for the usage of `format` function.
</MultiLineQuickTip>

### Invalid scenarios for all APIs

- **Invalid Status**
  - **Response**
    - **Status code**
      ```
      400
      ```
    - **Body**
      ```
      Invalid Todo Status
      ```
- **Invalid Priority**
  - **Response**
    - **Status code**
      ```
      400
      ```
    - **Body**
      ```
      Invalid Todo Priority
      ```
- **Invalid Category**

  - **Response**
    - **Status code**
      ```
      400
      ```
    - **Body**
      ```
      Invalid Todo Category
      ```

- **Invalid Due Date**
  - **Response**
    - **Status code**
      ```
      400
      ```
    - **Body**
      ```
      Invalid Due Date
      ```

### API 1

#### Path: `/todos/`

#### Method: `GET`

- **Scenario 1**

  - **Sample API**
    ```
    /todos/?status=TO%20DO
    ```
  - **Description**:

    Returns a list of all todos whose status is 'TO DO'

  - **Response**

    ```
    [
      {
        "id": 2,
        "todo": "Buy a Car",
        "priority": "Medium",
        "category": "WORK",
        "status": "TO DO",
        "dueDate": "2021-09-22"
      },
      ...
    ]
    ```

- **Scenario 2**

  - **Sample API**
    ```
    /todos/?priority=HIGH
    ```
  - **Description**:

    Returns a list of all todos whose priority is 'HIGH'

  - **Response**

    ```
    [
      {
        "id": 1,
        "todo": "Learn Node JS",
        "priority": "HIGH",
        "status": "IN PROGRESS",
        "category": "LEARNING",
        "status": "IN PROGRESS",
        "dueDate": "2021-04-04"
      }
    ]
    ```

- **Scenario 3**

  - **Sample API**
    ```
    /todos/?priority=HIGH&status=IN%20PROGRESS
    ```
  - **Description**:

    Returns a list of all todos whose priority is 'HIGH' and status is 'IN PROGRESS'

  - **Response**

    ```
    [
      {
        "id": 2,
        "todo": "Learn Node JS",
        "priority": "HIGH",
        "category": "LEARNING",
        "status": "IN PROGRESS",
        "dueDate": "2021-02-22"
      },
      ...
    ]
    ```

- **Scenario 4**

  - **Sample API**
    ```
    /todos/?search_q=Buy
    ```
  - **Description**:

    Returns a list of all todos whose todo contains 'Buy' text

  - **Response**

    ```
    [
      {
        "id": 2,
        "todo": "Buy a Car",
        "priority": "MEDIUM",
        "status":"TO DO"
        "category": "HOME",
        "dueDate": "2021-09-22"
      }
    ]
    ```

- **Scenario 5**

  - **Sample API**
    ```
    /todos/?category=WORK&status=DONE
    ```
  - **Description**:

    Returns a list of all todos whose category is 'WORK' and status is 'DONE'

  - **Response**

    ```
    [
      {
        "id": 4,
        "todo": "Fix the bug",
        "priority": "MEDIUM",
        "status": "TO DO",
        "category": "WORK",
        "dueDate": "2021-01-12"
      }
    ]
    ```

- **Scenario 6**

  - **Sample API**
    ```
    /todos/?category=HOME
    ```
  - **Description**:

    Returns a list of all todos whose category is 'HOME'

  - **Response**

    ```
    [
      {
        "id": 2,
        "todo": "Buy a Car",
        "priority": "MEDIUM",
        "status": "TO DO",
        "category": "HOME",
        "dueDate": "2021-09-22"
      },
      ...
    ]
    ```

- **Scenario 7**

  - **Sample API**
    ```
    /todos/?category=LEARNING&priority=HIGH
    ```
  - **Description**:

    Returns a list of all todos whose category is 'LEARNING' and priority is 'HIGH'

  - **Response**

    ```
    [
      {
        "id": 1,
        "todo": "Learn Node JS",
        "priority": "HIGH",
        "status": "IN PROGRESS",
        "category": "LEARNING",
        "dueDate": "2021-04-04"
      }
    ]
    ```

### API 2

#### Path: `/todos/:todoId/`

#### Method: `GET`

#### Description:

Returns a specific todo based on the todo ID

#### Response

```
{
  "id": 1,
  "todo": "Learn Node JS",
  "priority": "HIGH",
  "status": "IN PROGRESS",
  "category": "LEARNING",
  "dueDate": "2021-04-04"
}
```

### API 3

#### Path: `/agenda/`

#### Method: `GET`

#### Description:

Returns a list of all todos with a specific due date in the query parameter `/agenda/?date=2021-02-22`

#### Response

```
[
  {
    "id": 3,
    "todo": "Clean the garden",
    "priority": "LOW",
    "status": "TO DO",
    "category": "HOME",
    "dueDate": "2021-02-22"
  }
]
```

### API 4

#### Path: `/todos/`

#### Method: `POST`

#### Description:

Create a todo in the todo table,

#### Request

```
{
  "id": 6,
  "todo": "Finalize event theme",
  "priority": "LOW",
  "status": "TO DO",
  "category": "HOME",
  "dueDate": "2021-02-22"
}
```

#### Response

```
Todo Successfully Added
```

### API 5

#### Path: `/todos/:todoId/`

#### Method: `PUT`

#### Description:

Updates the details of a specific todo based on the todo ID

- **Scenario 1**

  - **Request**
    ```
    {
      "status": "DONE"
    }
    ```
  - **Response**

    ```
    Status Updated
    ```

- **Scenario 2**

  - **Request**
    ```
    {
      "priority": "HIGH"
    }
    ```
  - **Response**

    ```
    Priority Updated
    ```

- **Scenario 3**

  - **Request**

    ```
    {
      "todo": "Clean the garden"
    }
    ```

  - **Response**

    ```
    Todo Updated
    ```

- **Scenario 4**

  - **Request**
    ```
    {
      "category": "LEARNING"
    }
    ```
  - **Response**

    ```
    Category Updated
    ```

- **Scenario 5**

  - **Request**
    ```
    {
      "dueDate": "2021-01-12"
    }
    ```
  - **Response**

    ```
    Due Date Updated
    ```

### API 6

#### Path: `/todos/:todoId/`

#### Method: `DELETE`

#### Description:

Deletes a todo from the todo table based on the todo ID

#### Response

```
Todo Deleted
```

<br/>

Use `npm install` to install the packages.

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**
