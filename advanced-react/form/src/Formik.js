import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import './Bootstrap.css'

const initialValues = {
    friends: [
        {
            name: '',
            email: '',
        },
    ],
};

const Invitation = () => (
    <div className="cont">
        <h1>Invite Friends</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={values => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}>
            {({isSubmitting}) => <Form>
                <div className="row">
                    <div className="col">
                        <Field name="name" type="text" />
                    </div>
                    <div className="col">
                        <Field name="email" type="email" />
                    </div>
                    <div className="col">
                        <button type="button" className="Ba">X</button>
                    </div>
                </div>
                <button type="button" disabled={isSubmitting}>Add Friend</button>
                <button type="submit" disabled={isSubmitting}>Invite</button>
            
                </Form>}
        </Formik>
    </div>
);

export default Invitation;