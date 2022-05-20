In this practice let's build a **Coin Toss Game** by applying the concepts we have learned till now.

### Refer to images below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/coin-toss-game-output.gif" alt="coin-toss-game-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/coin-toss-game-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/coin-toss-game-lg-output.png)

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

- Initially the app should have heads image and total, heads, tails counts as 0.
- When **Toss Coin** button is clicked, the toss result should be generated using the below expression

    ```
    const tossResult = Math.floor(Math.random() * 2)
    ```
- If the number generated from the given expression is `0` then the result should be `heads` else the result should be `tails`
- When **Toss Coin** is clicked, if the result is `heads` then 
    - The heads image should be displayed
    - The heads count should be incremented by 1
    - The total should be incremented by 1
- When **Toss Coin** is clicked, if the result is `tails` then 
    - The tails image should be displayed
    - The tails count should be incremented by 1
    - The total should be incremented by 1


</details>

<details>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of
  - `src/components/CoinToss/index.js`
  - `src/components/CoinToss/index.css`
  </details>

> #### Important Note
>
> <details open>
> <summary>Click to view Important Note Points</summary>
>
>
> **The following HTML attributes are required for the HTML for the tests to
> pass**
>
> - The toss result image should have the alt text as **toss result**
> 
> </details>

### Resources

<details>
<summary>Image URLs</summary>

#### Images

- [https://assets.ccbp.in/frontend/react-js/heads-img.png](https://assets.ccbp.in/frontend/react-js/heads-img.png)
- [https://assets.ccbp.in/frontend/react-js/tails-img.png](https://assets.ccbp.in/frontend/react-js/tails-img.png)

</details>

<details>
<summary>Colors</summary>

#### Colors

<div style="background-color: #e2a139; width: 150px; padding: 10px; color: white">Hex: #e2a139</div>
<div style="background-color: #f9d423; width: 150px; padding: 10px; color: black">Hex: #f9d423</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #a35200; width: 150px; padding: 10px; color: white">Hex: #a35200</div>
<div style="background-color: #334155; width: 150px; padding: 10px; color: white">Hex: #334155</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: white">Hex: #475569</div>


<br/>
</details>

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
