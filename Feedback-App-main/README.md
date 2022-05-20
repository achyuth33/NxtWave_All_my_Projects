In this practice let's build a **Feedback App** by applying the concepts we have learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">

<img src="https://assets.ccbp.in/frontend/content/react-js/feedback-app-output-v2.gif" alt="feedback-large-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">

</div>

<br/>

### Design Files

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Feedback Question](https://assets.ccbp.in/frontend/content/react-js/feedback-app-question-sm-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Feedback Summary](https://assets.ccbp.in/frontend/content/react-js/feedback-app-summary-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Feedback Question](https://assets.ccbp.in/frontend/content/react-js/feedback-app-question-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Feedback Summary](https://assets.ccbp.in/frontend/content/react-js/feedback-app-summary-lg-output-v2.png)

### Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- When the user clicks an emoji then the thank you screen is visible to the user with the proper description.
- `feedbackData` is passed as a prop to the `Feedback` component.
- `feedbackData` object will have the following properties.

  |     Key      |    Data Type     |
  | :----------: | :--------------: |
  |    emojis    | Array \<object\> |
  | loveEmojiUrl |      String      |

- Each emoji object in the emojis list will have the following properties.

  |   Key    | Data Type |
  | :------: | :-------: |
  |    id    |  Number   |
  |   name   |  String   |
  | imageUrl |  String   |

- The value of the key `id` should be used as a key to the emoji list item.

- Your task is to complete the implementation of
  - `src/components/Feedback/index.js`
  - `src/components/Feedback/index.css`

> #### Important Note
>
> **The following HTML attributes are required for the HTML image elements for the tests to pass**
>
> - The HTML image element to display the love emoji should have the HTML attribute `alt` value as `loveEmoji`.

### Resources

#### Images

- [https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png](https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png)
- [https://assets.ccbp.in/frontend/react-js/none-emoji-img.png](https://assets.ccbp.in/frontend/react-js/none-emoji-img.png)
- [https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png](https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png)
- [https://assets.ccbp.in/frontend/react-js/love-emoji-img.png](https://assets.ccbp.in/frontend/react-js/love-emoji-img.png)

#### Colors

<div style="background-color: #ffeeee; width: 150px; padding: 10px; color: black">Hex: #ffeeee</div>
<div style="background-color: #ffc0bb; width: 150px; padding: 10px; color: black">Hex: #ffc0bb</div>
<div style="background-color: #ffebeb; width: 150px; padding: 10px; color: black">Hex: #ffebeb</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>

#### Font-families

- Roboto

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
