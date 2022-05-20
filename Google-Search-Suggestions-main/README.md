In this practice let's build a **Google Search Suggestions** by applying the concepts we have learned till now.

### Refer to images below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-output.gif" alt="google search suggestions output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-lg-output.png)

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

- Initially all the suggestions in the suggestionsList should be displayed
- When a value is provided in the search input then display the suggestions which includes the search input irrespective of case.
- When the arrow of a suggestion is clicked then the value inside the search input should be updated with the respective suggestion clicked

- The `GoogleSuggestions` component receives the `suggestionsList` as a prop. It consists of a list of suggestion objects with the following properties in each suggestions object

  | Key        | Data Type |
  | ---------- | --------- |
  | id         | Number    |
  | suggestion | String    |

</details>

<details>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of
  - `src/components/GoogleSuggestions/index.js`
  - `src/components/GoogleSuggestions/index.css`
  - `src/components/SuggestionItem/index.js`
  - `src/components/SuggestionItem/index.css`
  </details>

<details>
<summary>Click to view the Components Structure</summary>

#### Components Structure

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-component-structure-breakdown.png" alt="home-component-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

#### Quick Tips

<details>
<summary>Click to view Quick Tips</summary>

- You can use the below box-shadow CSS property to apply box-shadow effect to the containers,

  ```
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);

  ```

- You can use the below cursor CSS property for buttons to set the type of mouse cursor, to show when the mouse pointer is over an element,

  ```
    cursor: pointer;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png" alt="cursor pointer" style="width:100px" />

- You can use the below outline CSS property for buttons and input elements to remove the highlighting when the elements are clicked,

  ```
    outline: none;
  ```

  </details>

### Resources

<details>
<summary>Image URLs</summary>

#### Images

- [https://assets.ccbp.in/frontend/react-js/google-logo.png](https://assets.ccbp.in/frontend/react-js/google-logo.png) alt should be **google logo**
- [https://assets.ccbp.in/frontend/react-js/google-search-icon.png](https://assets.ccbp.in/frontend/react-js/google-search-icon.png) alt should be **search icon**
- [https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png](https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png) alt should be **arrow**

</details>

<details>
<summary>Colors</summary>

#### Colors

<div style="background-color: #bfbfbf; width: 150px; padding: 10px; color: white">Hex: #bfbfbf</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>

<br/>
</details>

#### Font-families

- Roboto

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
