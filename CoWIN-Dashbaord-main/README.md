In this project, let's build a **CoWIN Dashboard** by applying the concepts we have learned till now.

### Refer to the images below:

**Success View** <br/>

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cowin-dashbaord-output.gif" alt="cowin-dashboard-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

**Failure View** <br/>

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cowin-dashbaord-failure-view-output.gif" alt="cowin-dashboard-failure-view-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Large Devices (Size >= 1200px) - Success View](https://assets.ccbp.in/frontend/content/react-js/cowin-dashboard-xl-output.png)
- [Extra Large Devices (Size >= 1200px) - Failure View](https://assets.ccbp.in/frontend/content/react-js/cowin-dashbaord-xl-failure-view-output.png)

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

- When the page is opened,
  - An HTTP GET request should be made to the **covidVaccinationDataApiUrl**
  - **_loader_** should be displayed while the HTTP request is fetching the data
  - After the HTTP request is successful, the response received should be displayed using different charts from `recharts`
  - The last 7 days vaccination data should be displayed using the `BarChart` component from `recharts`
  - The data for vaccination by gender and vaccination by age should be displayed as two different pie charts using the `PieChart` component from `recharts`
  - When the HTTP GET request to the **covidVaccinationDataApiUrl** returns an error response then the [FailureView](https://assets.ccbp.in/frontend/react-js/api-failure-view.png) should be displayed
  </details>

<details>

<summary>API Requests & Responses</summary>

- The example response received from request to the **covidVaccinationDataApiUrl** will be

```json
{
  "last_7_days_vaccination": [
    {
      "vaccine_date": "30th Jul",
      "dose_1": 3757930,
      "dose_2": 1817805
    },
    ...
  ],
  "vaccination_by_age": [
    {
      "age": "18-44",
      "count": 482792375
    },
    ...
  ],
  "vaccination_by_gender": [
    {
      "count": 4809680,
      "gender": "Male"
    },
    ...
  ]
}
```

</details>
<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cowin-dashbaord-component-structure-breakdown.png" alt="cowin-dashbaord-component-breakdown-structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>
<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/CowinDashboard/index.js`
- `src/components/CowinDashboard/styledComponents.js`
- `src/components/VaccinationCoverage/index.js`
- `src/components/VaccinationCoverage/styledComponents.js`
- `src/components/VaccinationByGender/index.js`
- `src/components/VaccinationByGender/styledComponents.js`
- `src/components/VaccinationByAge/index.js`
- `src/components/VaccinationByAge/styledComponents.js`
</details>

### Quick Tips

<details close>
<summary>Click to view</summary>
<br>

- To show the animated loader, we need to import the `Loader` component as

  - In order to render the given animated loader, use **ThreeDots** for `type` attribute & also use **#ffffff** for `color` attribute of `Loader` component

  ```jsx
  <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
  ```

  </details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

- To build this project, take a look at the <a href="https://learning.ccbp.in/frontend-development/course?c_id=2f4192f7-7495-49ca-a6ce-6b74005e25f1&s_id=383d65f5-a1e8-4f9a-9a72-754bd49a614b&t_id=416f0cab-8425-413b-9157-c7b4d4ae4467" target="_blank">Recharts</a> reading material
- **The following instructions are required for the tests to pass**

  - Wrap the `Loader` component with an HTML container element and add the `data-testid` attribute value as `loader` to it

    ```jsx
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
    ```

  - Provide `width` and `height` to the respective chart component to make the charts visible on the page <br> For example:

    ```jsx
    <BarChart width={1000} height={300} />
    ```

    - Provide `width` and `height` as **number**

  - Achieve this CoWIN Dashboard on desktop devices. You can try different charts provided by the `recharts` package with customized data

</details>

### Resources

<details>
<summary>Data fetch URLs</summary>

- **covidVaccinationDataApiUrl** : https://apis.ccbp.in/covid-vaccination-data

</details>

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/api-failure-view.png](https://assets.ccbp.in/frontend/react-js/api-failure-view.png) alt should be **failure view**
- [https://assets.ccbp.in/frontend/react-js/cowin-logo.png](https://assets.ccbp.in/frontend/react-js/cowin-logo.png) alt should be **website logo**
</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #161625; width: 150px; padding: 10px; color: white">Hex: #161625</div>
<div style="background-color: #2cc6c6; width: 150px; padding: 10px; color: black">Hex: #2cc6c6</div>
<div style="background-color: #cbd5e1; width: 150px; padding: 10px; color: black">Hex: #cbd5e1</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #1c1c2b; width: 150px; padding: 10px; color: white">Hex: #1c1c2b</div>
<div style="background-color: #2d87bb; width: 150px; padding: 10px; color: black">Hex: #2d87bb</div>
<div style="background-color: #a3df9f; width: 150px; padding: 10px; color: black">Hex: #a3df9f</div>
<div style="background-color: #64c2a6; width: 150px; padding: 10px; color: black">Hex: #64c2a6</div>
<div style="background-color: #94a3b8; width: 150px; padding: 10px; color: black">Hex: #94a3b8</div>
<div style="background-color: #f54394; width: 150px; padding: 10px; color: black">Hex: #f54394</div>
<div style="background-color: #5a8dee; width: 150px; padding: 10px; color: black">Hex: #5a8dee</div>
<div style="background-color: #2cc6c6; width: 150px; padding: 10px; color: black">Hex: #2cc6c6</div>
<div style="background-color: #6c757d; width: 150px; padding: 10px; color: black">Hex: #6c757d</div>
<div style="background-color: #5a8dee; width: 150px; padding: 10px; color: black">Hex: #5a8dee</div>

</details>

<details>
<summary>Font-families</summary>

- Roboto
</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**.
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
