import React from 'react'
import {useForm} from 'react-hook-form'
import "./styles.css"


const App = () => {

  const {
    register,
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset

  } = useForm({
    mode: "onBlur"
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  }

  return (

    <div className="app">
      <h1>React Hook Form</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input
            {...register('firstName', {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 5,
                message: "Минимум 5 символов"
              }
            })
          }
          />
        </label>
        <label>
          Last Name:
          <input
            {...register('firstName', {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 5,
                message: "Минимум 5 символов"
              }
            })
          }
          />
        </label>
        <div style = {{height: 20}}>
          {errors?.firstName && <p>{errors?.firsName?.message || ""}</p>}
        </div>
        <input type="submit" disabled={!isValid}/>
      </form>
    </div>
  )
}

export default App