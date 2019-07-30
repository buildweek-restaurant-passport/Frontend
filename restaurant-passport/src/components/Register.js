import React from 'react';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const Register = props => {
	return (
		<Formik
			initialValues={{
				username  : '',
				password  : '',
				firstName : '',
				lastName  : '',
				city      : '',
				email     : '',
			}}
			onSubmit={(values, actions) => {
				console.log(values);
				actions.setSubmitting(true);
				axios
					.post('http://localhost:3000', values)
					.then(res => {
						localStorage.setItem('token', res.data.token);
						console.log(props);
					})
					.then(() => props.history.push('passports'))
					.catch(err => console.log(err));
			}}
			validationSchema={() =>
				Yup.object().shape({
					username  : Yup.string()
						.max(16, 'Your username must be less than 16 characters')
						.min(5, 'Your name must be at least five characters long')
						.required('A name is required'),
					password  : Yup.string()
						.min(6, 'Your password must have a minimum of six characters.')
						.required('Password is required'),
					firstName : Yup.string()
						.min(2, 'Your name must be at least two characters long.')
						.max(30, 'Your name must be less than 30 characters.')
						.required('Your first name is required'),
					lastName  : Yup.string()
						.min(2, 'Your name must be at least two characters long.')
						.max(30, 'Your name must be less than 30 characters.')
						.required('Your last name is required'),
					city      : Yup.string()
						.min(2, 'Your city must be at least two characters long.')
						.max(30, 'Your city must be less than 30 characters.')
						.required('Your city is required'),
					email     : Yup.string()
						.min(2, 'Your email must be at least two characters long.')
						.max(30, 'Your email must be less than 30 characters.')
						.required('Your email is required'),
				})}
			render={props => (
				<Form
					style={{
						display       : 'flex',
						flexDirection : 'column',
						alignItems    : 'center',
					}}
					onSubmit={props.handleSubmit}>
					<div>
						{props.touched.username && props.errors.username && <h3>{props.errors.username}</h3>}

						<Field
							placeholder='Username'
							label='username'
							name='username'
							id='username'
							type='text'
							onChange={props.handleChange}
							width='4'
						/>
					</div>

					<div>
						{props.touched.password && props.errors.password && <h3>{props.errors.password}</h3>}
						<Field
							placeholder='Password'
							label='password'
							name='password'
							id='password'
							type='password'
							onChange={props.handleChange}
							width='4'
						/>
					</div>
					<div>
						{props.touched.firstName && props.errors.firstName && <h3>{props.errors.firstName}</h3>}
						<Field
							placeholder='firstName'
							label='firstName'
							name='firstName'
							id='firstName'
							type='text'
							onChange={props.handleChange}
							width='4'
						/>
					</div>
					<div>
						{props.touched.lastName && props.errors.lastName && <h3>{props.errors.lastName}</h3>}
						<Field
							placeholder='lastName'
							label='lastName'
							name='lastName'
							id='lastName'
							type='text'
							onChange={props.handleChange}
							width='4'
						/>
					</div>
					<div>
						{props.touched.city && props.errors.city && <h3>{props.errors.city}</h3>}
						<Field
							placeholder='city'
							label='city'
							name='city'
							id='city'
							type='text'
							onChange={props.handleChange}
							width='4'
						/>
					</div>
					<div>
						{props.touched.email && props.errors.email && <h3>{props.errors.email}</h3>}
						<Field
							placeholder='email'
							label='email'
							name='email'
							id='email'
							type='email'
							onChange={props.handleChange}
							width='4'
						/>
					</div>

					<button type='submit'>Register</button>
				</Form>
			)}
		/>
	);
};

export default Register;
