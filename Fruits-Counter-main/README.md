In this assignment let's build a **Fruits Counter** by applying the concepts we have learned till now.

### Refer to images below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/fruits-counter-output.gif" alt="fruits-counter" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home](https://assets.ccbp.in/frontend/content/react-js/fruits-counter-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/fruits-counter-lg-output.png)

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

- Initially, the count of the eaten mangoes and bananas should be 0
- When **Eat Mango** is clicked the count of the mangoes eaten should be incremented by 1
- When **Eat Banana** is clicked the count of the bananas eaten should be incremented by 1

</details>

<details>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of
  - `src/components/FruitsCounter/index.js`
  - `src/components/FruitsCounter/index.css`
</details>

#### Quick Tips

<details>
<summary>Click to view Quick Tips</summary>

- State update are merged means that when you update only one key in the object state it will not affect the other keys.
    For example let's say your state is as followed:

    ```
    this.state = { key1 : value1, key2 : value2 }
    ```
    
    If you use this.setState such as :

    ```
    this.setState(prevState => ({key1: prevState + valueN}))
    ```

    Your new state will be :

    ```
    this.state = { key1 : value3, key2 : value2 }
    ```

- You can use the below cursor CSS property for buttons to set the type of mouse
  cursor, to show when the mouse pointer is over an element,

  ```
    cursor: pointer;
  ```

  <br/>
   <img src="https://assets.ccbp.in/frontend/content/react-js/cursor-pointer-img.png" alt="cursor pointer" style="width:100px" />

- You can use the below outline CSS property for buttons and input elements to
  remove the highlighting when the elements are clicked,

  ```
    outline: none;
  ```

  </details>

### Resources

<details>
<summary>Image URLs</summary>

#### Images

- [https://assets.ccbp.in/frontend/react-js/mango-img.png](https://assets.ccbp.in/frontend/react-js/mango-img.png) alt text should be **mango**
- [https://assets.ccbp.in/frontend/react-js/banana-img.png](https://assets.ccbp.in/frontend/react-js/banana-img.png) alt text should be **banana**

</details>

<details>
<summary>Colors</summary>

#### Colors

<div style="background-color: #ffd569 ; width: 150px; padding: 10px; color: black">Hex: #ffd569</div>
<div style="background-color: #ffffff ; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #000000 ; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #007bff ; width: 150px; padding: 10px; color: white">Hex: #007bff</div>

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
