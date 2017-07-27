const validate = values => {
  const errors = {}
  if (!values.password || !values.confirmpassword) {
    errors.password = 'Password is Required';
  }else if ( values.password !== values.confirmpassword ){
      errors.password = "Password confirmation should match the password.";
  }else if ( values.password.length < 6 ){
      errors.password = "Password should be minimum 6 characters long.";
  }

  if (!values.email) {
    errors.email = 'Email is Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.gender) {
    errors.gender = 'Gender Required'
  }
  if (!values.age) {
    errors.age = 'Age is Required';
  }else if (Number(values.age) < 18 || ! Number(values.age)) {
    errors.age = "The user must be 18 year old or more.";
  }

  if( !values.dob){
      errors.dob = 'Day Of Birth Is Required';
  }if(Number(values.dob) < 1 || Number(values.dob) > 31 ){
      errors.dob = 'Invalid Day Of Birth';
  }
  if( !values.mob ){
      errors.mob = 'Month Of Birth Is Required';
  }else if(Number(values.mob) < 1 || Number(values.mob) > 12 ){
      errors.mob = 'invalid Month Of Birth';
  }
  if(!values.yob ){
      errors.yob = 'year Of Birth Is Required';
  }else if( ! Number(values.yob) ){
      errors.yob = 'Year Of Birth Must be Number';
  }

  return errors;
}

export default validate;
