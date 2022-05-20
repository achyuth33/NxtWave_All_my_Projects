In this practice let's fix the **Google Search Suggestions** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-output.gif" alt="debugging google search suggestions" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
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

- Initially, all the suggestions in the suggestionsList should be displayed.
- When a value is provided in the search input then display the suggestions which include the search input irrespective of case.
- When the arrow of a suggestion is clicked then the value inside the search input should be updated with the respective suggestion clicked.

- The `GoogleSuggestions` component receives the `suggestionsList` as a prop. It consists of a list of suggestion objects with the following properties in each suggestions object.

  | Key        | Data Type |
  | ---------- | --------- |
  | id         | Number    |
  | suggestion | String    |

</details>

#### Quick Tips

<details>
<summary>Click to view Quick Tips</summary>

- There are `7` bugs to be fixed to achieve the functionality and the UI that is expected.

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
