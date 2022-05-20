In this project, let's build a **CCBP Timeline** by applying the concepts we learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/ccbp-timeline-output.gif" alt="ccbp timeline output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/ccbp-timeline-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/ccbp-timeline-lg-output.png)

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

- Initially, the page should display the timeline items list using **Chrono custom rendering** based on the `categoryId`
- The `TimelineView` component is provided with `timelineItemsList`. It consists of a list of timeline item objects with the following properties in each timeline item object

  - The timelineItemObject with `categoryId` as `COURSE` will have the following properties

    | Key         | Data Type |
    | ----------- | --------- |
    | id          | String    |
    | categoryId  | String    |
    | title       | String    |
    | courseTitle | String    |
    | description | String    |
    | duration    | String    |
    | tagsList    | Array     |

  - The tagsListObject will have the following properties

    | Key  | Data Type |
    | ---- | --------- |
    | id   | String    |
    | name | String    |

  - The timelineItemObject with `categoryId` as `PROJECT` will have the following properties

    | Key          | Data Type |
    | ------------ | --------- |
    | id           | String    |
    | categoryId   | String    |
    | title        | String    |
    | projectTitle | String    |
    | description  | String    |
    | imageUrl     | String    |
    | duration     | String    |
    | projectUrl   | String    |

- If the value of the key `categoryId` in timelineItemObject is `PROJECT` then Project card should be rendered
  - The Project card should consist of **Visit** link when a user clicked on it, then the page should be navigated to the respective project
  - The Project card should consist of a **Clock** icon with respective `duration` text
- If the value of the key `categoryId` in timelineItemObject is `COURSE` then Course card should be rendered
  - The Course card should consist of a **Calendar** icon with respective `duration` text
- Give the timeline items list data as a `items` prop for the Chrono component from **react-chrono**, so that the title will be displayed beside each card

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/ccbp-timeline-component-structure-breakdown.png" alt="component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/TimelineView/index.js`
- `src/components/TimelineView/styledComponents.js`
- `src/components/CourseTimelineCard/index.js`
- `src/components/CourseTimelineCard/styledComponents.js`
- `src/components/ProjectTimelineCard/index.js`
- `src/components/ProjectTimelineCard/styledComponents.js`

</details>

### Important Note

<details>
<summary>Click to view</summary>

- To build this project, take a look at the <a href='https://learning.ccbp.in/frontend-development/course?c_id=2f4192f7-7495-49ca-a6ce-6b74005e25f1&s_id=a152928a-64cc-4697-936c-db2e3c4f2716&t_id=416f0cab-8425-413b-9157-c7b4d4ae4467' target="_blank">React Chrono</a> reading material

**The following instructions are required for the tests to pass**

- **Styled Components** should be used for styling purpose.
- `AiFillClockCircle`, `AiFillCalendar` icons from `react-icons` should be used for **time** and **calender** icons in card respectively.
- **Roboto** should be applied as `font-family` for `courseTitle` and `projectTitle` in the card.

<br/>
<div style="text-align: center;">
    <img src="https://res.cloudinary.com/do4qwwms8/image/upload/v1628651316/Timeline%20view/ccbp-timeline-component-structure-breakdown_cq9ley.png" alt="content title and project title" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

- The **#0967d2** color should be applied as `color` for **Visit** anchor element in the card.

</details>

### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #171f46; width: 150px; padding: 10px; color: white">Hex: #171f46</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #0967d2; width: 150px; padding: 10px; color: white">Hex: #0967d2</div>
<div style="background-color: #2b237c; width: 150px; padding: 10px; color: white">Hex: #2b237c</div>

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
