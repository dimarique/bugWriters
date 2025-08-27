import styles from './CartForm.module.css'
import { useForm } from 'react-hook-form'


import React from 'react'

const CartForm = () => {

 const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();

    }


  return (
   
           <div className={styles.cartForm_container}>
                        <div className={styles.cartForm_content}>
                    <h2 className={styles.cartForm_title}>Order details</h2>
                    <div className={styles.cartForm_orderSummary}>
                        <h3>3 items</h3>
                        <div className={styles.cartForm_price}>
                            <h3>Total</h3>
                            <h2>$541,00</h2>
                        </div>
                    </div>


                    <div>
        
                            <form className={styles.cartForm_form} onSubmit={handleSubmit(onSubmit)}>
                                <div className={styles.cartForm_inputs}>
                                    <input
                                        type="text"
                                        placeholder='Name'
                                        {...register('name', {
                                            required: 'Please enter your name',
                                            minLength: { value: 3, message: 'Name is too short (min 3)' },
                                            maxLength: { value: 40, message: 'Name is too long (max 40)' },
                                            pattern: {
                                                value: /^[A-Za-zА-Яа-яЁё]+$/,
                                                message: 'Name can contain only letters',
                                            }
                                        })} />
                                    {errors.name && <span>{errors.name.message}</span>}
        
                                    <input
                                        type="tel"
                                        placeholder='Phone number'
                                        {...register('phone', {
                                            required: 'Please enter your phone number',
                                            minLength: { value: 8, message: 'Phone number is too short' },
                                            maxLength: { value: 15, message: 'Phone number is too long' },
                                            pattern: {
                                                value: /^[+\d\s()-]+$/,
                                                message: 'Only allowed characters: 0-9 + ( ) - space',
                                            },
        
                                        })} />
                                    {errors.phone && <span>{errors.phone.message}</span>}
        
        
        
                                    <input
                                        type="email"
                                        placeholder='Email'
                                        {...register('email', {
                                            required: "Please enter your email",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'Please enter a valid email',
                                            },
                                        })} />
                                    {errors.email && <span>{errors.email.message}</span>}
                                </div>
        
                                <button className={styles.cartForm_button} type='submit'>Order</button>
                            </form>
        
                    
        
        
                        </div>
                    </div>
                </div>
   
  )
}

export default CartForm