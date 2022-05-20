In this assignment let's build a **Rock Paper Scissors** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-output.gif" alt="rock paper scissors output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Playing View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-sm-playing-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Game Results View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-sm-game-results-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Game Rules View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-sm-rules-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Playing View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-playing-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Game Results View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-game-results-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Game Rules View](https://assets.ccbp.in/frontend/content/react-js/rock-paper-scissors-lg-rules-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When you click on the **Rules** button, it should trigger a popup, and rules image should be displayed
- Initially, the score displayed should be **0**
- When any of the 3 buttons (i.e Rock, Paper, Scissors) is clicked, then the game result should be displayed
- In the game result, the opponent choice should be generated randomly among these 3 buttons (i.e Rock, Paper, Scissors)
- When the **Rock** button is clicked, then the rock image should be displayed as your choice in the game results view
- When the **Paper** button is clicked, then the paper image should be displayed as your choice in the game results view
- When the **Scissors** button is clicked, then the scissors image should be displayed as your choice in the game results view

  #### Game Rules

    <details>
    <summary>Click to view the Game Rules</summary>
    <br/>
    <img src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png" alt="cursor pointer" style="width:500px","height:300px" />
    <br/>

    - Game result should be based on you and your opponent choices
        - When your choice is **paper** and your opponent choice is **rock** then the result will be `YOU WON`
        - When your choice is **scissors** and your opponent choice is **rock** then the result will be `YOU LOSE`
        - When your choice is **rock** and your opponent choice is **paper** then the result will be `YOU LOSE`
        - When your choice is **scissors** and your opponent choice is **paper** then the result will be `YOU WON`
        - When your choice is **rock** and your opponent choice is **scissors** then the result will be `YOU WON`
        - When your choice is **paper** and your opponent choice is **scissors** then the result will be `YOU LOSE`
        - When your choice and your opponent choice matches then the result will be `IT IS DRAW`

    </details>

- When the result is `YOU WON`, then the count of the score should be incremented by 1
- When the result is `IT IS DRAW`, then there shouldn't be any change in the count of the score
- When the result is `YOU LOSE`, then the count of the score should be decremented by 1
- When the **PLAY AGAIN** button is clicked, then the playing view should be displayed as shown in the design files
</details>

### Quick Tips

<details close>
<summary>Click to view Quick Tips</summary>

- You can use the `Math.random()` and `Math.floor()` functions

</details>

### Important Note

<details>
<summary>Click to view</summary>

- You can use **reactjs-popup** for displaying the modal
- `RiCloseLine` icon from `react icons` can be used for the **close** button at `React Popup`.

**The following instructions are required for the tests to pass**

- **Styled Components** should be used for styling purpose.
- The Page should consist of three HTML button elements with `data-testid` attribute values as **rockButton**, **scissorsButton** and **paperButton** respectively.
- In Game Results View, the page should consist of HTML image element with alt attribute value as **your choice** and src attribute value as URL for your choice image
- In Game Results View, the page should consist of HTML image element with alt attribute value as **opponent choice** and src attribute value as URL for opponent choice image
- **Roboto** should be applied as `font-family` for **Score** value.

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png](https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png) alt should be **rules**

</details>

<details>
<summary>Colors</summary>
<br/>

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #223a5f; width: 150px; padding: 10px; color: white">Hex: #223a5f</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto
- Bree Serif

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
