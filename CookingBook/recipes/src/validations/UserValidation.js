import * as yup from 'yup';

export const userSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(5, 'Password must be more than 5 symbols').required('Password is required'),
    rePassword: yup.string().min(5, 'Password must be more than 5 symbols').oneOf([yup.ref('password'), null], 'Password don\'t match'),
});

export const userLoginSchema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(5, 'Password must be more than 5 symbols').required('Password is required'),
});