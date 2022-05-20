In this assignment let's build **Technology Cards** by applying the concepts we
have learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">

<img src="https://assets.ccbp.in/frontend/content/react-js/technology-cards-lg-output.png" alt="simple-cards-app-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">

</div>

<br/>

### Design Files

- [Extra Small (Size < 576px), Small (Size >= 576px), and Medium (Size >= 768px)](https://assets.ccbp.in/frontend/content/react-js/technology-cards-sm-output.gif)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/technology-cards-lg-output.png)

### Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- The `Card` component will receive the details of the card in the prop
  `cardData`
- Each card object will have the following properties

  | Key         | Data Type |
  | ----------- | --------- |
  | id          | Number    |
  | title       | String    |
  | description | String    |
  | imgUrl      | String    |
  | className   | String    |

- The value of the key `id` should be used as a key to the `Card` component.
- The value of the key `className` should be used for the HTML container element
  in the `Card` component.

- Your task is to complete the implementation of
  - `src/App.js`
  - `src/App.css`
  - `src/components/Card/index.js`
  - `src/components/Card/index.css`

### Resources

#### Images

- [https://assets.ccbp.in/frontend/react-js/data-scientist-img.png](https://assets.ccbp.in/frontend/react-js/data-scientist-img.png)
- [https://assets.ccbp.in/frontend/react-js/iot-developer-img.png](https://assets.ccbp.in/frontend/react-js/iot-developer-img.png)
- [https://assets.ccbp.in/frontend/react-js/vr-developer-img.png](https://assets.ccbp.in/frontend/react-js/vr-developer-img.png)
- [https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png](https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png)

#### Colors

<div style="background-color: #f4faff; width: 150px; padding: 10px; color: white">Hex: #f4faff</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #ff4f64; width: 150px; padding: 10px; color: white">Hex: #ff4f64</div>
<div style="background-color: #00a8e7; width: 150px; padding: 10px; color: white">Hex: #00a8e7</div>
<div style="background-color: #44c4a1; width: 150px; padding: 10px; color: white">Hex: #44c4a1</div>
<div style="background-color: #fcc200; width: 150px; padding: 10px; color: white">Hex: #fcc200</div>
<div style="background-color: #171f46; width: 150px; padding: 10px; color: white">Hex: #171f46</div>

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
