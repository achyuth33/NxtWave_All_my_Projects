In this assignment let's build a **Reviews App** by applying the concepts we
have learned till now.

### Refer to image below:

<br/>
<div style="text-align: center;">

<img src="https://assets.ccbp.in/frontend/content/react-js/reviews-app-output-v2.gif" alt="reviews-app-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">

</div>

<br/>

### Design Files

- [Extra Small (Size < 576px), Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/reviews-app-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/reviews-app-lg-output.png)

## Project Set Up Instructions

- Download dependencies by running `npm install`
- Start up the app using `npm start`

### Project Completion Instructions

#### Add Functionality

The app must have the following functionalities

- When the HTML button element with id `leftArrow` is clicked the previous
  review details like profile image, username, company, and description should
  be displayed
- When the HTML button element with id `rightArrow` is clicked the next review
  details like profile image, username, company, and description should be
  displayed
- If the review that is being displayed is the first review in the list of
  reviews
  - There should not be any state change when HTML button element with id
    `leftArrow` is clicked
- If the review that is being displayed is the last review in the list of
  reviews

  - There should not be any state change when HTML button element with id
    `rightArrow` is clicked

- The list of reviews is passed to the ReviewsCarousel component as a prop
  `reviewsData` in the form of an array object.

- Each review object will have the following properties

  | Key         | Data Type |
  | ----------- | --------- |
  | imgUrl      | String    |
  | username    | String    |
  | companyName | String    |
  | description | String    |

- Your task is to complete the implementation of
  - `src/components/ReviewsCarousel/index.js`.
  - `src/components/ReviewsCarousel/index.css`.

> #### Important Note
>
> **The following HTML attributes are required for the HTML button and image
> elements for the tests to pass**
>
> - The HTML button element to check the previous review should have the testid
>   attribute and its value as `leftArrow`
> - The HTML button element to check the next review should have the testid
>   attribute and its value as `rightArrow`
> - The HTML image elements to display the profile image should have the HTML
>   attribute `alt` values as `userName-avatar`

### Quick Tips:

- The cursor CSS property sets the type of mouse cursor, if any, to show when
  the mouse pointer is over an element. Use the CSS property cursor with value
  `pointer` to indicate a link.
- An outline is a line that is drawn around an element, outside the border. The
  outline CSS shorthand property sets all the outline properties. Use the CSS
  property `outline` with value `none` to hide all the outline properties

### Resources

#### Images

- [https://assets.ccbp.in/frontend/react-js/reviews-bg.png](https://assets.ccbp.in/frontend/react-js/reviews-bg.png)
- [https://assets.ccbp.in/frontend/react-js/left-arrow-img.png](https://assets.ccbp.in/frontend/react-js/left-arrow-img.png)
- [https://assets.ccbp.in/frontend/react-js/right-arrow-img.png](https://assets.ccbp.in/frontend/react-js/right-arrow-img.png)
- [https://assets.ccbp.in/frontend/react-js/wade-warren-img.png](https://assets.ccbp.in/frontend/react-js/wade-warren-img.png)
- [https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png](https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png)
- [https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png](https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png)
- [https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png](https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png)

#### Colors

<div style="background-color: #ffffff ; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #171f46 ; width: 150px; padding: 10px; color: white">Hex: #171f46</div>

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
