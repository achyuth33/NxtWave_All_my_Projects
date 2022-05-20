In this practice let's fix the **IPL Dashboard** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-output-v2.gif" alt="ipl-dashboard-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Project Set Up Instructions

<details>
<summary>Click to view the Set Up Instructions</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Project Completion Instructions

<details>
<summary>Click to view the Functionality to be added</summary>

#### Fix The Functionality

Fix the given code to have the following functionality

- When the app is opened Home Route should be displayed.
- When the Home Route is opened,

  - Make HTTP GET request to the following URL `https://apis.ccbp.in/ipl`
  - After fetching the data, the list of teams should be displayed
  - **_loader_** should be displayed while the HTTP request is fetching the data

- When a team card in Home Route is clicked,

  - Page should be navigated to the Team Matches route with the path `/team-matches/:id`

- When the Team Matches Route is opened,

  - Make HTTP GET request to the following URL `https://apis.ccbp.in/ipl/<team_id>` with the team id to get the previous matches data of the team
  - **_loader_** should be displayed while the HTTP request is fetching the data

    Example: `https://apis.ccbp.in/ipl/KKR`

  - After fetching the data, the team banner, latest match, and list of recent matches should be displayed

</details>

> #### Important Note
>
> <details open>
> <summary>Click to view Important Note Points</summary>
>
> **The following HTML attributes are required for the HTML for the tests to
> pass**
>
> - Wrap the Loader component with an HTML container element and add the
>   `testid` attribute value as `loader` to it as shown below
>
> ```
> <div testid="loader">
>      <Loader type="Oval" color="#ffffff" height={80} width={80} />
> </div>
> ```
>
> </details>

#### Quick Tips

<details>
<summary>Click to view Quick Tips</summary>

- There are `13` bugs to be fixed to achieve the functionality and the UI that is expected.

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
