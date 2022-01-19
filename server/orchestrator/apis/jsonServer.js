
let response = await axios({
  method: 'GET',
    url: 'https://fitness-calculator.p.rapidapi.com/macrocalculator',
    params: {
    age: payload.age,
    gender: payload.gender,
    height: payload.height,
    weight: payload.weight,
    activitylevel: payload.level,
    goal: payload.goals
    },
    headers: {
    'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
    'x-rapidapi-key': '8a2cc8bca1mshf123ad465cdd47bp1cc9a5jsn305fd03044ca'}
    })