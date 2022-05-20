In this assignment let's build a **Destination Search** by applying the concepts we have learned till now.

### Refer to images below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/destination-search-output-v2.gif" alt="destination search output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/destination-search-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/destination-search-lg-output-v2.png)

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

- Initially the complete list of destinations should be displayed
- When a value is provided in search input, the destinations list should only contain the destinations whose names contain the value entered in the search input irrespective of case

- The `DestinationSearch` component receives the `initialDestinationsList` as a prop. It consists of a list of destination objects with the following properties in each destination object

  | Key         | Data Type |
  | ----------- | --------- |
  | id          | Number    |
  | name  | String    |
  | imgUrl | String    |


</details>

<details>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of
  - `src/components/DestinationSearch/index.js`
  - `src/components/DestinationSearch/index.css`
  - `src/components/DestinationItem/index.js`
  - `src/components/DestinationItem/index.css`

</details>

<details>
<summary>Click to view the Components Structure</summary>

#### Components Structure

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/destination-search-component-structure-v2-img.png" alt="home-component-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

> #### Important Note
>
> <details open>
> <summary>Click to view Important Note Points</summary>
>
> **The following functionality is required for the tests to pass**
>
> - The search for the destination should be case insensitive. You can use the `toLowerCase` method to convert a string into lower case letters.
>
> ```js
> const text = "Learn JavaScript";
> console.log(text.toLowerCase()); // learn javascript
> ```
> </details>

### Resources

<details>
<summary>Image URLs</summary>

#### Images

- [https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png](https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png) alt text should be **search icon**

</details>

<details>
<summary>Colors</summary>

#### Colors

<div style="background-color: #252627; width: 150px; padding: 10px; color: white">Hex: #252627</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #f1f5f9; width: 150px; padding: 10px; color: black">Hex: #f1f5f9</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>

<br/>
</details>

#### Font-families

- Roboto
- Open Sans

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.
