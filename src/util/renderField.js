import React from 'react';

const renderField = ({ input, label, type,option, className,id,check,meta: { touched, error } }) => {
    if (type === 'select') {
          return <div>
            <select {...input}>
              <option value=""></option>
              {option.map(val => <option value={val} key={val}>{val}</option>)}
            </select>
            {touched && error && <span className="error">{error}</span>}
          </div>
    }else if (type==='error'){
          return touched && error ? <span className="error">{error}</span> : false;
    }else if(type==='radio'){
          return <div className={className}>
            <input {...input} placeholder={label} type={type} id={id} />
            <label htmlFor={id}>{label}</label>
          </div>
    }else if(type==='dob'){
      return <div className={className}>

        <input {...input} placeholder={label} type={type} />
        {touched && error && <span className="error">{error}</span>}
      </div>
    }else{
          return <div className={className}>
            {touched && error && <span className="error">{error}</span>}
            <input {...input} placeholder={label} type={type} />
          </div>
    }
}

export default renderField;
