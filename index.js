let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
//console.log(weeklyExpenseQuestions)

for(let i = 0; i < weeklyExpenseQuestions.length; i++){
    let answer = parseInt(window.prompt(weeklyExpenseQuestions[i]));
    weeklyExpenses = answer + weeklyExpenses
}

for(let i = 0; i < monthlyExpenseQuestions.length; i++){
    let answer = parseInt(window.prompt(monthlyExpenseQuestions[i]));
    monthlyExpenses = answer + monthlyExpenses
}

for(let i = 0; i < annualExpenseQuestions.length; i++){
    let answer = parseInt(window.prompt(annualExpenseQuestions[i]));
    annualExpenses = answer + annualExpenses
}