In this practice let's build a **IPL Dashboard App** by applying the concepts we have learned till now.

### Refer to images below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-output-v2.gif" alt="ipl-dashboard-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-home-sm-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Team Matches](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-team-matches-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-home-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Team Matches](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-team-matches-lg-output-v2.png)

</details>

### Project Set Up Instructions

<details>
<summary>Click to view the Set Up Instructions</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Project Completion Instructions

<details>
<summary>Click to view the Functionality to be added</summary>

#### Add Functionality

The app must have the following functionalities

- When the app is opened Home Route should be displayed.
- When the Home Route is opened,

  - Make HTTP GET request to the following URL `https://apis.ccbp.in/ipl`
  - After fetching the data, the list of teams should be displayed
  - **_loader_** should be displayed while the HTTP request is fetching the data

- When a team card in Home Route is clicked,

  - Page should be navigated to the Team Matches route with the URL `/team-matches/:id`

- When the Team Matches Route is opened,

  - Make HTTP GET request to the following URL `https://apis.ccbp.in/ipl/<team_id>` with the team id to get the previous matches data of the team
  - **_loader_** should be displayed while the HTTP request is fetching the data

    Example: `https://apis.ccbp.in/ipl/KKR`

  - After fetching the data, the team banner, latest match, and list of recent matches should be displayed
  </details>

<details>
<summary>Click to view the Example response</summary>

- The example response from a request to this API `https://apis.ccbp.in/ipl` will be

```json
{
  "teams": [
    {
      "name": "Royal Challengers Bangalore",
      "id": "RCB",
      "team_image_url":
        "https://assets.ccbp.in/frontend/react-js/rcb-logo-img.png",
    },
    ...
  ],
}
```

- The example response from a request to this API `https://apis.ccbp.in/ipl/<team_id>` will be

```json
{
  "team_banner_url": "https://assets.ccbp.in/frontend/react-js/kkr-team-img.png",
  "latest_match_details": {
    "umpires": "CB Gaffaney, VK Sharma",
    "result": "Kolkata Knight Riders Won by 7 wickets",
    "man_of_the_match": "Shubman Gill",
    "id": "1216545",
    "date": "2020-09-26",
    "venue": "At Sheikh Zayed Stadium, Abu Dhabi",
    "competing_team": "Sunrisers Hyderabad",
    "competing_team_logo":
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png",
    "first_innings": "Sunrisers Hyderabad",
    "second_innings": "Kolkata Knight Riders",
    "match_status": "Won",
  },
  "recent_matches": [
    {
      "umpires": "RK Illingworth, K Srinivasan",
      "result": "Royal Challengers Bangalore Won by 82 runs",
      "man_of_the_match": "AB de Villiers",
      "id": "1216540",
      "date": "2020-10-12",
      "venue": "At Sharjah Cricket Stadium, Sharjah",
      "competing_team": "Royal Challengers Bangalore",
      "competing_team_logo":
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png",
      "first_innings": "Royal Challengers Bangalore",
      "second_innings": "Kolkata Knight Riders",
      "match_status": "Lost",
    },
    ...
  ],
}
```

</details>

<details>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of
  - `src/App.js`
  - `src/components/Home/index.js`
  - `src/components/Home/index.css`
  - `src/components/TeamCard/index.js`
  - `src/components/TeamCard/index.css`
  - `src/components/TeamMatches/index.js`
  - `src/components/TeamMatches/index.css`
  - `src/components/LatestMatch/index.js`
  - `src/components/LatestMatch/index.css`
  - `src/components/MatchCard/index.js`
  - `src/components/MatchCard/index.css`
  </details>

<details>
<summary>Click to view the Components Structure</summary>

#### Components Structure

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/home-component-structure-img.png" alt="home-component-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/team-matches-component-structure-img.png" alt="team-matches-component-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>

</details>

#### Quick Tips

<details>
<summary>Click to view Quick Tips</summary>

- To show the animated loader, we need to import the loader component as `import Loader from 'react-loader-spinner'`
- In order to form the given animated loader, use **Oval** for `type` attribute & also use **#ffffff** for `color` attribute of `Loader` component

  ```
  <Loader type="Oval" color="#ffffff" height={50} width={50} />
  ```

  </details>
  <br/>

> #### Important Note
>
> <details open>
> <summary>Click to view Important Note Points</summary>
>
> **The following HTML attributes are required for the HTML for the tests to pass**
>
> - The IPL logo in the Home Route should have the HTML alt attribute value as `ipl-logo`
> - The API response received from the given apiUrl should be converted to camel case
> - Wrap the Loader component with an HTML container element and add the `testid` attribute value as `loader` to it as shown below
>   ```
>   <div testid="loader">
>        <Loader type="Oval" color="#ffffff" height={80} width={80} />
>   </div>
>   ```
> - Render HomeRoute component when path in URL matches `/`
> - Render TeamMatchesRoute component when path in URL matches `/team-matches/:id`
> - No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js` file
> - Each TeamMatchesRoute should have different gradient colors as background based on the selected team
> </details>

### Resources

<details>
<summary>Data fetch URLs</summary>

#### Data Fetch URLs

- `https://apis.ccbp.in/ipl`
</details>

<details>
<summary>Image URLs</summary>

#### Images

- [https://assets.ccbp.in/frontend/react-js/ipl-dashboard-sm-bg.png](https://assets.ccbp.in/frontend/react-js/ipl-dashboard-sm-bg.png)
- [https://assets.ccbp.in/frontend/react-js/ipl-dashboard-lg-bg.png](https://assets.ccbp.in/frontend/react-js/ipl-dashboard-lg-bg.png)
- [https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png](https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png)
</details>

<details>
<summary>Colors</summary>

#### Colors

**Background Colors**:

<div style="background-color: #ffffff33; width: 150px; padding: 10px; color: black">Hex: #ffffff33</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #a4261d; width: 150px; padding: 10px; color: white">Hex: #a4261d</div>
<div style="background-color: #5755a7; width: 150px; padding: 10px; color: white">Hex: #5755a7</div>
<div style="background-color: #d91c1f; width: 150px; padding: 10px; color: white">Hex: #d91c1f</div>
<div style="background-color: #f7db00; width: 150px; padding: 10px; color: white">Hex: #f7db00</div>
<div style="background-color: #da237b; width: 150px; padding: 10px; color: white">Hex: #da237b</div>
<div style="background-color: #13418b; width: 150px; padding: 10px; color: white">Hex: #13418b</div>
<div style="background-color: #f26d22; width: 150px; padding: 10px; color: white">Hex: #f26d22</div>
<div style="background-color: #4f5db0; width: 150px; padding: 10px; color: white">Hex: #4f5db0</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<br/>

**Border Colors**

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: black">Hex: #475569</div>

<br />

**Text Colors**

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #18ed66; width: 150px; padding: 10px; color: black">Hex: #18ed66</div>
<div style="background-color: #e31a1a; width: 150px; padding: 10px; color: black">Hex: #e31a1a</div>
</details>

#### Font-families

- Bree Serif

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
