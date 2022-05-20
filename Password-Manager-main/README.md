In this project, let's build a **Password Manager** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/passowrd-manager-output-v0.gif" alt="password manager" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-sm-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Masked Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-masked-passwords-sm-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Show Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - No Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Masked Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-masked-passwords-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Show Passwords View](https://assets.ccbp.in/frontend/content/react-js/password-manager-lg-output.png)

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

- Initially, the website input, username input, and password input should be empty and [No Password View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png) should be displayed
- When non-empty values are provided for the website, username, and password and the **Add** button is clicked,
  - A new password item should be added to the list of passwords.
  - The **stars image** should be displayed in the password items instead of the password text
  - The value inside the input elements for website, username, and password should be updated to their initial values
  - When the **Show Password** checkbox is checked, then the password text should be displayed instead of the **stars image**
- When a non-empty value is provided in the search input element, then password items whose website is matched with the search input value irrespective of the case should be displayed
- When a non-empty value is provided in the search input element, and if the website of any password item does not match the value given in the search input, then [No Password View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png) should be displayed
- When the delete button of a password item is clicked, the respective password item should be deleted from the list of passwords
- When all password items are deleted, then [No Password View](https://assets.ccbp.in/frontend/content/react-js/password-manager-no-passwords-lg-output.png) should be displayed
</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- website input element placeholder should be **Enter Website**
- username input element placeholder should be **Enter Username**
- password input element placeholder should be **Enter Password**
- The delete button in the history item should have the `testid` as **delete**

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png) alt should be **app logo**
- [https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png) alt should be **password manager**
- [https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png) alt should be **password manager**
- [https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png) alt should be **website**
- [https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png) alt should be **username**
- [https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png) alt should be **password**
- [https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png) alt should be **search**
- [https://assets.ccbp.in/frontend/react-js/no-passwords-img.png](https://assets.ccbp.in/frontend/react-js/no-passwords-img.png) alt should be **no passwords**
- [https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png) alt should be **stars**
- [https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png](https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png) alt should be **delete**
</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #9ba9eb; width: 150px; padding: 10px; color: black">Hex: #9ba9eb</div>
<div style="background-color: #c3caea; width: 150px; padding: 10px; color: black">Hex: #c3caea</div>
<div style="background-color: #5763a5; width: 150px; padding: 10px; color: black">Hex: #5763a5</div>
<div style="background-color: #f8fafc; width: 150px; padding: 10px; color: black">Hex: #f8fafc</div>
<div style="background-color: #454f84; width: 150px; padding: 10px; color: white">Hex: #454f84</div>
<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: black">Hex: #0b69ff</div>
<div style="background-color: #94a3b8; width: 150px; padding: 10px; color: black">Hex: #94a3b8</div>
<div style="background-color: #b6c3ca; width: 150px; padding: 10px; color: black">Hex: #b6c3ca</div>
<div style="background-color: #7683cb; width: 150px; padding: 10px; color: black">Hex: #7683cb</div>
<div style="background-color: #f59e0b; width: 150px; padding: 10px; color: black">Hex: #f59e0b</div>
<div style="background-color: #10b981; width: 150px; padding: 10px; color: black">Hex: #10b981</div>
<div style="background-color: #f97316; width: 150px; padding: 10px; color: black">Hex: #f97316</div>
<div style="background-color: #14b8a6; width: 150px; padding: 10px; color: black">Hex: #14b8a6</div>
<div style="background-color: #b91c1c; width: 150px; padding: 10px; color: black">Hex: #b91c1c</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #0ea5e9; width: 150px; padding: 10px; color: black">Hex: #0ea5e9</div>
<div style="background-color: #64748b; width: 150px; padding: 10px; color: white">Hex: #64748b</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
