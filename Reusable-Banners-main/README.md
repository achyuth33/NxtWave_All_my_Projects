In this assignment let's build a **Reusable Banners** by applying the concepts we have learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">

<img src="https://assets.ccbp.in/frontend/content/react-js/resuable-banners-lg-output.png" alt="resuable-banners-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">

</div>

<br/>

### Design Files

- [Extra Small (Size < 576px), Small (Size >= 576px), Medium (Size >= 768px)](https://assets.ccbp.in/frontend/content/react-js/reusable-banners-sm-output.png)

- [Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/resuable-banners-lg-output.png)


### Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- The `BannerCardItem` component will receive the details of the banner card in the prop `bannerCardData`
- Each banner card object will have the following properties

  | Key         | Data Type |
  | ----------- | --------- |
  | id          | Number    |
  | headerText  | String    |
  | description | String    |
  | className   | String    |

- The value of the key `id` should be used as a key to the `BannerCardItem` component.
- The value of the key `className` should be used as a className for the HTML container element
  in the `BannerCardItem` component.

- Your task is to complete the implementation of
  - `src/App.js`
  - `src/App.css`
  - `src/components/BannerCardItem/index.js`
  - `src/components/BannerCardItem/index.css`


### Resources

#### Images

- [https://assets.ccbp.in/frontend/react-js/reusable-banners-card-1-bg.png](https://assets.ccbp.in/frontend/react-js/reusable-banners-card-1-bg.png)
- [https://assets.ccbp.in/frontend/react-js/reusable-banners-card-2-bg.png](https://assets.ccbp.in/frontend/react-js/reusable-banners-card-2-bg.png)
- [https://assets.ccbp.in/frontend/react-js/reusable-banners-card-3-bg.png](https://assets.ccbp.in/frontend/react-js/reusable-banners-card-3-bg.png)

#### Colors

<div style="background-color: #7e858e66; width: 150px; padding: 10px; color: black">Hex: #7e858e66</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #326a9d; width: 150px; padding: 10px; color: white">Hex: #326a9d</div>

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
