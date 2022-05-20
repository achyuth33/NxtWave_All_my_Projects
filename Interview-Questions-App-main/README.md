In this assignment, let's build an **Interview Questions App** by applying the
react concepts we learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">

<img src="https://assets.ccbp.in/frontend/content/react-js/interview-questions-output-v2.gif" alt="interview-questions-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">

</div>

<br/>

### Design Files

- [Extra Small (Size < 576px), Small (Size >= 576px) - language selected](https://assets.ccbp.in/frontend/content/react-js/interview-questions-language-sm-output-v2.png)
- [Extra Small (Size < 576px), Small (Size >= 576px) - difficulty level selected](https://assets.ccbp.in/frontend/content/react-js/interview-questions-level-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - language selected](https://assets.ccbp.in/frontend/content/react-js/interview-questions-language-lg-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - difficulty level selected](https://assets.ccbp.in/frontend/content/react-js/interview-questions-level-lg-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - both language and difficulty level is selected](https://assets.ccbp.in/frontend/content/react-js/interview-questions-both-lg-output.png)

## Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- By default **language** and **level** are selected as **ALL** then complete
  data should be displayed.

- When a specific **language** is selected
- Only interview questions on that language should be displayed with all the
  levels.

- When a specific **level** is selected

  - Only interview questions in that level should be displayed for all the
    languages.

- When both specific **language** and specific **level** is selected
- Only interview questions on that language should be displayed with the
  selected level.

- When the **Show** button is clicked in each question
- The answer to the question should be visible to the user.
- Button text should be changed to **Hide**.
- The down arrow icon should change to up arrow icon.

- When the **Hide** button is clicked in each question

  - The answer to the question should be hidden to the user.
  - Button text should be changed to **Show**.
  - The up arrow icon should change to down arrow icon.

- Each interview question object will have the following properties

  | Key             | Data Type |
  | --------------- | --------- |
  | id              | Number    |
  | questionText    | String    |
  | answerText      | String    |
  | language        | String    |
  | difficultyLevel | String    |

- Each difficulty level object will have the following properties

  | Key   | Data Type |
  | ----- | --------- |
  | id    | Number    |
  | level | String    |

- Each language object will have the following properties

  | Key      | Data Type |
  | -------- | --------- |
  | id       | Number    |
  | language | String    |

- Your task is to complete the implementation of

  - `src/components/InterviewQuestionsApp/index.js`
  - `src/components/InterviewQuestionsApp/index.css`
  - `src/components/Filters/index.js`
  - `src/components/Filters/index.css`
  - `src/components/InterviewQuestion/index.js`
  - `src/components/InterviewQuestion/index.css`

> ### Important Note
>
> **The following attributes are required in the component for the tests to
> pass**
>
> - The `InterviewQuestion` component should have a Show button element in which
>   it contains image element with HTML `alt` attribute value as 'down arrow'
> - The `InterviewQuestion` component should have a Hide button element in which
>   it contains image element with HTML `alt` attribute value as 'up arrow'

### Quick Tips:

- The box-shadow CSS property adds shadow effects around an element's frame. You
  can set multiple effects separated by commas. Check
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow" target="__blank">this
  </a> to know more.
- The cursor CSS property sets the type of mouse cursor, if any, to show when
  the mouse pointer is over an element. Use the CSS property `cursor` with the
  value `pointer` to indicate a link. Click
  <a href="https://css-tricks.com/almanac/properties/c/cursor/" target="_blank">this</a>
  to know more.
- An outline is a line that is drawn around an element, outside the border. The
  outline CSS shorthand property sets all the outline properties. Use the CSS
  property `outline` with value `none` to hide all the outline properties. Click
  <a href="https://www.w3schools.com/css/css_outline.asp" target="_blank">this</a>
  to know more.

### Resources

#### Images

- [https://assets.ccbp.in/frontend/react-js/interview-questions-img.png](https://assets.ccbp.in/frontend/react-js/interview-questions-img.png)
- [https://assets.ccbp.in/frontend/react-js/up-arrow.png](https://assets.ccbp.in/frontend/react-js/up-arrow.png)
- [https://assets.ccbp.in/frontend/react-js/down-arrow.png](https://assets.ccbp.in/frontend/react-js/down-arrow.png)

#### Colors

<div style="background-color: #2b237c ; width: 150px; padding: 10px; color: white">Hex: #2b237c</div>
<div style="background-color: #180d5b ; width: 150px; padding: 10px; color: white">Hex: #180d5b</div>

#### Background Colors

<div style="background-color: #16a34a16 ; width: 150px; padding: 10px; color: black">Hex: #16a34a16</div>
<div style="background-color: #d9770616 ; width: 150px; padding: 10px; color: black">Hex: #d9770616</div>
<div style="background-color: #dc262616 ; width: 150px; padding: 10px; color: black">Hex: #dc262616</div>
<div style="background-color: #0284c716 ; width: 150px; padding: 10px; color: black">Hex: #0284c716</div>
<div style="background-color: #9333ea16 ; width: 150px; padding: 10px; color: black">Hex: #9333ea16</div>
<div style="background-color: #db277716 ; width: 150px; padding: 10px; color: black">Hex: #db277716</div>

#### Border Colors

<div style="background-color: #cbd2d9 ; width: 150px; padding: 10px; color: black">Hex: #cbd2d9</div>

#### Text Colors

<div style="background-color: #16a34a ; width: 150px; padding: 10px; color: white">Hex: #16a34a</div>
<div style="background-color: #d97706 ; width: 150px; padding: 10px; color: white">Hex: #d97706</div>
<div style="background-color: #dc2626 ; width: 150px; padding: 10px; color: white">Hex: #dc2626</div>
<div style="background-color: #0284c7 ; width: 150px; padding: 10px; color: white">Hex: #0284c7</div>
<div style="background-color: #9333ea ; width: 150px; padding: 10px; color: white">Hex: #9333ea</div>
<div style="background-color: #db2777 ; width: 150px; padding: 10px; color: white">Hex: #db2777</div>
<div style="background-color: #0f172a ; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #9aa5b1 ; width: 150px; padding: 10px; color: white">Hex: #9aa5b1</div>
<div style="background-color: #475569 ; width: 150px; padding: 10px; color: white">Hex: #475569</div>
<div style="background-color: #7b8794 ; width: 150px; padding: 10px; color: white">Hex: #7b8794</div>
<div style="background-color: #323f4b ; width: 150px; padding: 10px; color: white">Hex: #323f4b</div>

#### Font-families

- Playfair Display
- Roboto

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.
