export default (async function showResults(values) {
  var dob = values.dob + '-' + values.mob + '-' +values.yob;
  var user_data = {'email':values.email,'password':values.password,'date_of_birth':dob,'age':values.age,'gender':values.gender,'how_hear_about_us':values.hearedFrom};
  console.log(`${JSON.stringify(user_data, null, 2)}`);
});
