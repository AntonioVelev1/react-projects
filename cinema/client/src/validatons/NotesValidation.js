import * as yup from 'yup';

export const noteSchema = yup.object().shape({
    comment: yup.string().min(3, 'Text must be more than 3 symbols').required('Text is required'),
});