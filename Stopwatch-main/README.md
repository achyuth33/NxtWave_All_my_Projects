In this assignment let's build a **Stopwatch** by applying the concepts we have
learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">

<img src="https://assets.ccbp.in/frontend/content/react-js/stopwatch-output-v2.gif" alt="reviews-app-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">

</div>

<br/>

### Design Files

- [Extra Small (Size < 576px), Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/stopwatch-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/stopwatch-lg-output.png)

## Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- When the **Start** button is clicked the Stopwatch should start running.
- When the **Stop** button is clicked the Stopwatch should stop running.
- When the **Reset** button is clicked the Stopwatch should be reset to zero.

- Your task is to complete the implementation of
  - `src/components/Stopwatch/index.js`.
  - `src/components/Stopwatch/index.css`.

> #### Important Note
>
> **The following HTML attributes are required for the HTML button and image
> elements for the tests to pass**
>
> - The HTML main heading element to display the time should have the testid attribute and its value as `timer`

### Quick Tips

- The box-shadow CSS property adds shadow effects around an element's frame. You
  can set multiple effects separated by commas. Check
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow" target="__blank">this</a>
  to know more
- The floor() method rounds a number DOWNWARDS to the nearest integer, and
  returns the result. Check
  <a href="https://www.w3schools.com/jsref/jsref_floor.asp" target="__blank">this</a>
  to know more

### Resources

#### Images

- [https://assets.ccbp.in/frontend/react-js/stopwatch-sm-bg.png](https://assets.ccbp.in/frontend/react-js/stopwatch-sm-bg.png)
- [https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png](https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png)
- [https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png](https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png)

#### Colors

<div style="background-color: #ffffff ; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #333333 ; width: 150px; padding: 10px; color: white">Hex: #333333</div>
<div style="background-color: #1db05f ; width: 150px; padding: 10px; color: white">Hex: #1db05f</div>
<div style="background-color: #ef0d36 ; width: 150px; padding: 10px; color: white">Hex: #ef0d36</div>
<div style="background-color: #eaa800 ; width: 150px; padding: 10px; color: white">Hex: #eaa800</div>

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
