In this project let's build a **Tasty Kitchens App** by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a class component, displaying that data, using **component lifecycle** methods, **routing** concepts, **authentication**, and **authorization**, and adding responsiveness to the website.

This is an individual assessment. All work must be your own. You will also be given feedback by code reviewers after your project submission.

### Prerequisites

#### UI Prerequisites

<details>
<summary>Click to view</summary>

- What is Figma?
  - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" target="_blank">Website</a>.
- Create a Free account in Figma
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=hrHL2VLMl7g&t=37s" target="_blank">this</a> video to create a Free Figma account.
- How to Check CSS in Figma?
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=B242nuM3y2s" target="_blank">this</a> video to check CSS in the Figma screen.
- Export Images in Figma screen
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=NpzL1MONwaw" target="_blank">this</a> video to export images from the Figma screen.
  - Check <a href="https://help.trydesignlab.com/hc/en-us/articles/360011010634-How-do-I-export-images-and-PDFs-from-Sketch-or-Figma-in-my-short-course-" target="_blank">this</a> reference docs to export images in Figma screen.

</details>

#### Design Files

<details>
<summary>Click to view</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/5DK9nvTWZ4W0ytHtDrDe56/Tasty_Kitchens" target="_blank">here</a>.

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

The app must have the following functionalities

- Login Route
  - Users should be able to login to their account by entering a valid username and password.
- Users should be able to navigate to Home, Cart routes using links in Navbar.
- When the data is being fetched then the Loading view should be displayed to the user.
- Users should be able to view the website responsively in mobile view, tablet view as well.
- Home Route
  - Navbar should contain the application title with logo, Home, Cart, and Logout button.
  - Users should be able to navigate to Home route when clicking on **TASTY KITCHENS** logo.
  - Users should be able to see carousel images with its offer details.
  - Users should be able to see Popular Restaurants.
  - Users should be able to see the sort by icon as shown in the Figma.
  - The default value for the Sort By filter should be `Lowest` (You can use the `sortByOptions` object from the path `src/App.js`).
  - Users should be able to select the sort by icon and able to see the Popular Restaurants based on the Highest and Lowest Ratings.
  - Users should be able to sort the list of Restaurants based on their ratings.
    - When user clicked the Lowest the Restaurants list should be displayed in Lowest ratings to Highest ratings.
    - When user clicked the Highest the Restaurants list should be displayed in Highest ratings to Lowest ratings.
  - Users can browse popular Restaurants using pagination buttons.
  - Users should be able to see the footer as shown in Figma.
  - Users should be able to see Home with highlighted text in Navbar.
- Specific Restaurant details Route
  - When users click a restaurant in a particular list, it should open a new page with respective restaurant details.
  - Users should be able to see food items list as shown in the figma screens.
- Cart Route
  - Users should be able to select the Cart link in the navbar and be able to view their selected Food items, each food item quantity, and price of each food item in a separate page.
  - Users should be able to increase or decrease their each food item quantity and price should increase or decrease appropriately.
  - Users should be able to see their order total as shown in figma.
  - Users should be able to see the footer as shown in figma.
  - Users should be able to see Cart with highlighted text in Navbar.
  - Users should be able to see Cart Items even after the app is refreshed, store the data in **<u>Local Storage</u>**.
- Logout Button
  - Users should be able to logout from accounts page.
- When the data is being fetched then the Loading view should be displayed to the user in all Routes.
- Users should be able to view the website responsively in mobile view, tablet view as well.
- When the users enter invalid route in the URL then the Page not found Route should be displayed.

</details>

### Quick Tips

<details>
<summary>Click to view</summary>

- You can use React-slick third party library to implement offers carousel
  - React Slick <a href="https://react-slick.neostack.com/docs/get-started" target="_blank">Documentation</a>
  - React Slick implementation <a href="https://codesandbox.io/s/react-slick-implementation-fj18g?file=/src/ReactSlick.js" target="_blank">CodeSandbox</a>

</details>

### Important Note

Below Instructions are needed to pass the test cases.

<details>
<summary>Click to view</summary>

- **Note:**
  - For Mini Projects, you have to use normal HTML elements to style the React Components. Usage of `styled-components` (CSS in JS) to style React components are not supported in Mini Projects. Test cases won't be passed, if you use styled components.
  - Refer to the below Example for the usage of `testid` in the HTML elements.
    - Example: `<div testid="restaurant-item" className="restaurant-item"/>`.
- Routes:
  - The Login Route should contain the pathname as `/login`.
  - The Home Route should contain the pathname as `/`.
  - The Restaurant Details Route should contain the pathname as `/restaurant/:id`.
    - **Note:** use the particular restaurant id in place of id.
  - The Cart Route should contain the pathname as `/cart`.
- Login Component:
  - The Tasty Kitchen image should consist of alt text as `website logo`.
  - The Landing image should consist of alt text as `website login`.
  - The Cookies should be set by using the key name `jwt_token`.
- Home:

  - The Tasty Kitchen image in Navbar should consist of alt text as `website logo`.
  - The Restaurants offer Loader component should contain the test id with value as `restaurants-offers-loader`.
  - The Restaurants list Loader component should contain the test id with value as `restaurants-list-loader`.
  - The Restaurants Offer images should contain alt text as `offer`.
  - The Restaurant list items should contain the test id with value as `restaurant-item`.
  - The Restaurant image in the particular Restaurant item should contain alt text as `restaurant`.
  - The Left Pagination button should contain the test id with value as `pagination-left-button`.
  - The Right Pagination button should contain the test id with value as `pagination-right-button`.
  - The active page number in the pagination container should contain the test id attribute value as `active-page-number`.

    - Example: `<span testid="active-page-number">1</span> of 4.`

- Footer:
  - Your code should contain a `Footer` Component in the path `src/components`.
  - The Footer component should consist of all social icons from the `react-icons` third-party library.
  - The image in the Footer Component should contain alt text as `website-footer-logo`.
  - The Pintrest social icon (FaPinterestSquare) should contain the test id value as `pintrest-social-icon`.
  - The Instagram social icon (FaInstagram) should contain the test id value as `instagram-social-icon`.
  - The Twitter social icon (FaTwitter) should contain the test id value as `twitter-social-icon`.
  - The Facebook social icon (FaFacebookSquare) should contain the test id value as `facebook-social-icon`.
- Restaurant Details:
  - The Loader component should contain the test id with value as `restaurant-details-loader`.
  - The Restaurant image should consist of alt text as `restaurant`.
  - Each Food item in the food items list should contain the test id with value as `foodItem`.
  - The Count of the food item should contain the test id with value as `active-count`.
  - The Button which is used to decrement the food item count should contain the test id with value as `decrement-count`.
  - The Button which is used to increment the food item count should contain the test id with value as `increment-count`.
- Cart:

  - You have to store the cart data in **<u>Local Storage</u>** only.
  - Add items to Local Storage by using the key name `cartData`.
  - Each cart item in the `cartData` should have the key names as mentioned in the given example format strictly.

    Example:

    ```
    {
        cost: 345,
        quantity: 2,
        id: 'c3b24b72-3356-4c26-a2cf-8379eb9053cd',
        imageUrl:
        'https://assets.ccbp.in/frontend/react-js/tasty-kitchens/food-items-2/chicken-salad-16.jpg',
        name: 'Chicken Salad',
    }
    ```

  - Each cart item in the Cart Route should contain the test id with value as `cartItem`.
  - The Button which is used to decrement the food item count should contain the test id with value as `decrement-quantity`.
  - The Button which is used to increment the food item count should contain the test id with value as `increment-quantity`.
  - The quantity of the food item in the Cart Should contain the test id with the value as `item-quantity`.
  - The Total price value should contain the test id with the value as `total-price`.
  - The image in the Empty Cart view should contain the alt text as `empty cart`.

- Page Not Found:
  - The page not found image should consist of alt text as `not found`.

</details>

### Resources

<details>
<summary>Data fetch URLs</summary>

- **Note:** Use the values in the APIS as shown below

  - The value of the query parameter **limit** should always be `9`.
  - The `selectedSortByValue` should contain either Highest or Lowest as values.
  - Use the search input value in place of `searchInput`.
  - Use the particular Restraunt id in place of `restrauntId`.

  - The value of the query parameter **offset** can be calculated using the below formula.

    ```js
    const offset = (activePage - 1) * limit
    ```

  - Use the below sample code snippet to make a POST request on Login using valid username and password.

    ```js
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    ```

- Login Route:

  - Get Request Token:

    ```js
    'https://apis.ccbp.in/login'

    ```

    - Sample request object:

      ```json
      {
        "username": "rahul",
        "password": "rahul@2021"
      }
      ```

    - Valid credentials:

      ```example
        username: rahul
        password: rahul@2021
      ```

    - Sample response object:

      ```json
      {
        "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
      }
      ```

- Home Route:

  - Get Carousel Images:

    ```js
    'https://apis.ccbp.in/restaurants-list/offers'

    ```

    - Sample response object:

      ```example
      {
        "offers": [
           {
            "image_url": "https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-jammu-special.jpg",
            "id": 1
           },
            .....
          ]
      }
      ```

  - Get Restaurants List:

    ```js
    'https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}'

    ```

    - Sample response object:

      ```example
        {
        "restaurants": [
        {
            "has_online_delivery": true,
            "user_rating": {
            "rating_text": "Very Good",
            "rating_color": "5BA829",
            "total_reviews": 155,
            "rating": 4.3
            },
            "name": "Broasted Friend Chicken (BFC)",
            "has_table_booking": 0,
            "is_delivering_now": 0,
            "cost_for_two": 1500,
            "cuisine": "North Indian, Fast Food",
            "image_url": "https://www.franchisezing.com/franchise/wp-content/uploads/2016/02/chole-bhature.jpg",
            "id": "2300058",
            "menu_type": "NON-VEG",
            "location": "plot no 23, Silicon Valley, Hyderabad, Telangana 500081",
            "opens_at": "10:00 AM Tomorrow",
            "group_by_time": true
        },
        ....
      ],
      "total": 30
      }
      ```

  - SortBy Functionality:

    ```js
    'https://apis.ccbp.in/restaurants-list?sort_by_rating={selectedSortByValue}'

    ```

    ```js
    // Example URL with query parameters and values
    const apiUrl = 'https://apis.ccbp.in/restaurants-list?offset=0&limit=9&sort_by_rating=Highest'
    ```

  - Search Functionality:

    ```js
    'https://apis.ccbp.in/restaurants-list?search=${searchInput}'

    ```

    ```js
    // Example URL with query parameters and values
    const apiUrl = 'https://apis.ccbp.in/restaurants-list?search=hotel&offset=0&limit=9&sort_by_rating=Lowest'
    ```

- Specific Restaurant Details Route:

  - Get Restaurant Details:

    ```js
    'https://apis.ccbp.in/restaurants-list/${restrauntId}'

    ```

  - Sample response object:

    ```example
    {
        "rating": 3.6,
        "id": "3200283",
        "name": "Miss.Ice Cream",
        "cost_for_two": 700,
        "cuisine": "Bakery",
        "image_url":"https://b.zmtcdn.com/data/pictures/3/2200283/2f0442152a13a183aaf62065e4689158_featured_v2.jpg",
        "reviews_count": 51,
        "opens_at": "12:00 PM, Tomorrow",
        "location": "Domalguda, Himayatnagar, Hyderabad",
        "items_count": 45,
        "food_items": [
                {
                    "name": "Chicken Roast",
                    "cost": 660,
                    "food_type": "NON-VEG",
                    "image_url":"https://americanhomecook.com/wp-content/uploads/2019/11/Thanksgiving-Roast-Chicken2.jpg",
                    "id": "7352a58f-3228-4c7c-bd98-f66423f6bdcf"
                },
            .....
        ]
    }
    ```

</details>

### Stretch Goals

If you complete the main features of the project you can try out the below features as well.

**Note:** Just a reminder the additional functionality is just extra practice using the tools we have learned. These are not required. If you do not reach the stretch goals, don't worry.

<details>
<summary>Additional Functionality to be added</summary>

- Profile Route
  - Users should be able to select and view basic profile details using the Profile in the navbar in a separate page.
- Search Functionality
  - Users should be able to search for popular restaurants.
  - Users should be able to browse search results using pagination buttons.
  - When the user provides the restaurant name which is not in the database then the No results view should be displayed.
  - When the users click a restaurant, it should open a new page with respective restaurant details.
- Restaurants Availability Route
  - Users should be able to see the restaurant immediate availability time if the restaurant is closed currently.

</details>

### Project Submission Instructions

- For Mini Projects, you can submit the test cases at your own pace. But we suggest you to submit the code to know the percentage of completion through test cases and that score will be considered for your interviews.

- Also it's important to publish your code frequently using `Step - 4` in the Instructions tab.

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
