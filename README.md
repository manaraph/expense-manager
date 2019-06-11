# expense-manager
*Imagine that you come back from 2 weeks of holidays on a Monday. On the team Kanban board, assigned to you, two tasks await :*

```
> User story 1:

As a user, I want to be able to enter my expenses and have them saved for later.As a user, in the application UI, I can navigate to an expenses page. On this page, I can add an expense, setting:
The date of the expense
The value of the expense
The reason of the expense
When I click "Save Expense", the expense is then saved in the database. The new expense can then be seen in the list of submitted expenses.

> User story 2:

As a user, I want to be able to see a list of my submitted expenses.As a user, in the application UI, I can navigate to an expenses page. On this page, I can see all the expenses I have already submitted in a tabulated list. On this list, I can see:
1. The date of the expense
2. The VAT (Value added tax) associated to this expense. VAT is the UK’s sales tax. It is 20% of the value of the expense, and is included in the amount entered by the user.
3. The reason for the expense

> User story 3:

As a user, I want to be able to save expenses in eurosAs a user, in the UI, when I write an expense, I can add the chars EUR after it (example : 12,00 EUR). When this happens, the application automatically converts the entered value into pounds and saves this new value in the database. The conversion needs to be accurate. It was decided that our application would call a public API to either realise the conversion or determine the right conversion rate, and then use it.

> User story 4:

As a user, I want to see the VAT calculation update in real time as I enter my expenses. After conversation with the dev team, we decided that the VAT should be calculated client-side as the user enters a new expense, before they save the expense to the database. 
```
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
