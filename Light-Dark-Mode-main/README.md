In this assignment let's build a **Light Dark Mode** by applying the concepts we
have learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">

<img src="https://assets.ccbp.in/frontend/content/react-js/light-dark-mode-output.gif" alt="reviews-app-output" style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">

</div>

<br/>

### Design Files

- [Extra Small (Size < 576px), Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/light-dark-mode-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/light-dark-mode-lg-output.png)

## Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- When the app is opened the UI should be displayed in dark mode
- When the HTML button element is clicked, if the app is in dark mode

  - The UI should be displayed in Light mode
  - The text content in the button should be changed to **Dark Mode**

- When the HTML button element is clicked, if the app is in light mode

  - The UI should be displayed in Dark mode
  - The text content in the button should be changed to **Light Mode**

- Your task is to complete the implementation of
  - `src/components/LightDarkMode/index.js`.
  - `src/components/LightDarkMode/index.css`.

### Resources

#### Colors

<div style="background-color: #000000 ; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #ffffff ; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>

#### Font-families

- Roboto

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.
