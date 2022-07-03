import React from 'react'
import { useForm } from 'react-hook-form'

export default function Auth() {

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isValid,
      submitCount
    }
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset();
  }



  return (
    <div className='container bg-light rounded-2 p-2 mt-2'>
      <h2>Auth</h2>
      {/* <h2>Form</h2>
      <form className='Form' onSubmit={handleSubmit(onSubmit)}>
        Количство отправок:{submitCount}
        <label>
          {errors?.name && <p>{errors.name.message}</p>}
          Name
          <input
            placeholder='Name'
            type="text"
            {...register('name', {
              required: "Поле безательно  заполнению",
              minLength: {
                value: 5 ,
                message: "Минимум 5 символов"
              }
            })}
          />
        </label>
        <label>
          Age
          {errors?.age && <p>{errors.age.message}</p>}
          <input
            {...register('age', {
              required: "Поле обезательно к заполнению",
              minLength: {
                value:2,
                message: "Минимум 2 символа"
              },
              maxLength: {
                value: 3,
                message: 'Максимум 3 символа'
              }

            })}
            placeholder='Age'
            type="text"
          />
        </label>
        <input type="submit" disabled={!isValid}/>
      </form> */}
    </div>
  )
}
