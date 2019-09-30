import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { Button, Segment } from 'semantic-ui-react';


const SmurfFormSchema = Yup.object().shape({
  name: Yup.string().required('Please enter your smurf name'),
  age: Yup.string().required('Please enter your smurf age'),
  height: Yup.string().required('Please enter your smurf height')
});

function SmurfForm(props) {
  return (
    <div className='container'>
        <Formik
          initialValues={{ name: '', age: '', height: ''}}
          validationSchema={SmurfFormSchema}
          onSubmit={async (values, { setStatus }) => {
            try {
              await axios.post('http://localhost:3333/smurfs', values);
              const { name, age, height } = values;
              props.history.push('/Smurfs');
            } catch (error) {
              console.log(error);
              setStatus({ msg: error });
            }
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="form">
              <Segment stacked>
                <Field
                  className="field"
                  type="text"
                  name="name"
                  placeholder="Smurf Name"
                />
                {touched.name && errors.name && (
                  <p className="form__error">{errors.name}</p>
                )}
                <Field
                  className="field"
                  type="text"
                  name="age"
                  placeholder="Smurf Age"
                />
                {touched.age && errors.age && (
                  <p className="form__error">{errors.age}</p>
                )}
                <Field
                  className="field"
                  type="numeric"
                  name="height"
                  placeholder="Height"
                />
                {touched.height && errors.height && (
                  <p className="form__error">{errors.height}</p>
                )}
                <Button
                  style={{
                    color: 'white',
                    backgroundColor: '#2B4162',
                    marginTop: '10px'
                  }}
                  fluid
                  size="large"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Segment>
            </Form>
          )}
        </Formik>
    </div>
  );
}

export default SmurfForm;