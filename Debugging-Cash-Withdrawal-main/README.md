In this practice let's fix the **Cash Withdrawal** by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cash-withdrawal-output-v2.gif" alt="debugging cash withdrawal" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Project Set Up Instructions

<details>
<summary>Click to view the Set Up Instructions</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Project Completion Instructions

<details>
<summary>Click to view the Functionality to be added</summary>

#### Fix The Functionality

Fix the given code to have the following functionality

- Initially, the balance should be **2000** rupees.
- When a denomination is clicked the respective value should be deducted from the balance available.

- The `CashWithdrawal` component receives the `denominationsList` as a prop. It consists of a list of denomination objects with the following properties in each denomination object.

  | Key         | Data Type |
  | ----------- | --------- |
  | id          | Number    |
  | value  | Number    |

</details>

#### Quick Tips

<details>
<summary>Click to view Quick Tips</summary>

- There are `9` bugs to be fixed to achieve the functionality and the UI that is expected.

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.
