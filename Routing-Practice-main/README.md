In this assignment let's build a **Routing Practice App** by applying the concepts we have learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/routing-practice-output.gif" alt="routing-practice-desktop-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

- [Extra Small (Size < 576px), Small (Size >= 576px), Medium (Size >= 768px)](https://assets.ccbp.in/frontend/content/react-js/routing-practice-sm-output.png)
- [Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/routing-practice-lg-output.png)

### Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- When the **About** link in the header is clicked then the page should navigate to the `AboutRoute`
- When the **Contact** link in the header is clicked then the page should navigate to the `ContactRoute`
- When the **Home** link in the header is clicked then the page should navigate back to the `HomeRoute`
- When an undefined path is entered in the URL then the page should navigate to the `NotFoundRoute`
  
- Your task is to complete the implementation of
  - `src/components/App.js`
  - `src/components/App.css`
  - `src/components/Header/index.js`
  - `src/components/Header/index.css`
  - `src/components/Home/index.js`
  - `src/components/Home/index.css`
  - `src/components/About/index.js`
  - `src/components/About/index.css`
  - `src/components/Contact/index.js`
  - `src/components/Contact/index.css`
  - `src/components/NotFound/index.js`
  - `src/components/NotFound/index.css`

> #### Important Note
>
> - `HomeRoute` should consist of "/" in URL path
> - `AboutRoute` should consist of "/about" in URL path
> - `ContactRoute` should consist of "/contact" in URL path
>
> - No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js` file

### Resources

#### Images

- [https://assets.ccbp.in/frontend/react-js/wave-logo-img.png](https://assets.ccbp.in/frontend/react-js/wave-logo-img.png)
- [https://assets.ccbp.in/frontend/react-js/home-blog-img.png](https://assets.ccbp.in/frontend/react-js/home-blog-img.png)
- [https://assets.ccbp.in/frontend/react-js/about-blog-img.png](https://assets.ccbp.in/frontend/react-js/about-blog-img.png)
- [https://assets.ccbp.in/frontend/react-js/contact-blog-img.png](https://assets.ccbp.in/frontend/react-js/contact-blog-img.png)
- [https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png](https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png)

#### Colors

<div style="background-color: #6d396b; width: 150px; padding: 10px; color: white">Hex: #6d396b</div>
<div style="background-color: #555555; width: 150px; padding: 10px; color: white">Hex: #555555</div>
<div style="background-color: #551e53; width: 150px; padding: 10px; color: white">Hex: #551e53</div>
<div style="background-color: #12022f; width: 150px; padding: 10px; color: white">Hex: #12022f</div>

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
