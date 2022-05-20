In this practice let's build a **Faqs App** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">

<img src="https://assets.ccbp.in/frontend/content/react-js/faqs-output-v3.gif" alt="faqs-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)" />

</div>

<br/>

### Design Files

<details>
<summary>Click to view the Design Files</summary>

- [Extra Small (Size < 576px), Small (Size >= 576px), Medium (Size >= 768px)](https://assets.ccbp.in/frontend/content/react-js/faqs-sm-output-v2.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/faqs-lg-output-v2.png)

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

- When the plus icon is clicked in the FAQ
  - The answer to the FAQ should be visible to the user.
  - The plus icon should change to a minus icon.
- When the minus icon is clicked in the FAQ
  - The answer to the FAQ should be hidden to the user.
  - The minus icon should change to a plus icon.
- The `Faqs` component receives the `faqsList` as a prop. It consists of a list of faq objects with the following properties in each faq object

  |     Key      | Data Type |
  | :----------: | :-------: |
  |      id      |  Number   |
  | questionText |  String   |
  |  answerText  |  String   |

</details>

<details>
<summary>Click to view the Implementation Files</summary>

- Your task is to complete the implementation of
  - `src/components/Faqs/index.js`
  - `src/components/Faqs/index.css`
  - `src/components/FaqItem/index.js`
  - `src/components/FaqItem/index.css`
  </details>

<details>
<summary>Click to view the Components Structure</summary>

#### Components Structure

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/faqs-component-structure-breakdown.png" alt="faqs-component-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

> #### Important Note
>
> **The following HTML attributes are required for the HTML image elements for the tests to pass**
>
> - The HTML image element to display the plus icon image should have the HTML attribute `alt` value as `plus`
> - The HTML image element to display the minus icon image should have the HTML attribute `alt` value as `minus`

### Quick Tips

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

- [https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png](https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png)
- [https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png](https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png)

</details>

<details>
<summary>Colors</summary>

#### Colors

<div style="background-color: #cb8805; width: 150px; padding: 10px; color: white">Hex: #cb8805</div>
<div style="background-color: #52606d; width: 150px; padding: 10px; color: white">Hex: #52606d</div>
<div style="background-color: #9aa5b1; width: 150px; padding: 10px; color: white">Hex: #9aa5b1</div>

#### Border Colors

<div style="background-color: #d7dae6; width: 150px; padding: 10px; color: black">Hex: #d7dae6</div>
<div style="background-color: #e4e7eb; width: 150px; padding: 10px; color: black">Hex: #e4e7eb</div>

#### Background Colors

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #f1f5f8; width: 150px; padding: 10px; color: black">Hex: #f1f5f8</div>

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
