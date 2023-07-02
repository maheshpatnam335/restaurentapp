import axios from "axios";
import { Form, Formik } from "formik";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Col, Input, Row } from "reactstrap";
import * as Yup from 'yup';
import InputBox from "../Components/InputBox";
import PageHeader from "../Components/PageHeader";
import { handleError, handleSuccess } from "../utils/Sweetalert";
//import 'react-widgets/dist/css/react-widgets.css'

const Register = (props) => {
    const [role, setRole] = useState(0);
    const initialValues = {
        fname: '',
        lname: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Employee Id or Roll number is required"),
        password: Yup.string().required("Password is required."),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null]).required()
    })
    const handleSubmit = async (values) => {
        try {
            await axios.post(`http://localhost:8080/Register`, values).then((res) => {
                if (res.data == '') {
                    handleError('Email already exists.')
                } else {
                    handleSuccess("Succesful");
                    props.history.push('/')
                }
            })
        }
        catch {
            alert('Getting errror')
        }

    }
    return <Fragment>
        <Card>
            <CardBody>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => handleSubmit(values)}
                >
                    {({ values, errors, setFieldValue }) => {
                        const handleChange = async (name, value) => {
                            setFieldValue(name, value)

                        }
                        return <Form>
                            <center>
                                <PageHeader header='Register' />
                                <Row>
                                    <Col md='4' />
                                    <Col md='2'>
                                        <InputBox name='fname' label='First Name' handleChange={handleChange} />
                                    </Col>
                                    <Col md='2'>
                                        <InputBox name='lname' label="Last Name" handleChange={handleChange} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md='4' />
                                    <Col md='2'>
                                        <InputBox name='email' type='email' label='Email' handleChange={handleChange} />
                                        <p style={{ color: 'red' }}>{errors && errors.email}</p>
                                    </Col>
                                    <Col md='2'>
                                        <InputBox name='mobileNumber' label='Mobile Number' type='number' handleChange={handleChange} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md='4' />
                                    <Col md='2'>
                                        <InputBox type='password' name='password' label='Password' handleChange={handleChange} />
                                        <p style={{ color: 'red' }}>{errors && errors.password}</p>
                                    </Col>
                                    <Col md='2'>
                                        <InputBox type='password' name='confirmPassword' label='Password' handleChange={handleChange} />
                                        <p style={{ color: 'red' }}>{errors && errors.confirmPassword}</p>
                                    </Col>
                                </Row>
                                <Row className="pt-4">
                                    <Col md='4' />
                                    <Col md='2'>
                                        <Button type='submit' className="btn btn-success">Register</Button>
                                    </Col>
                                    <Col md='2'><Button type="reset" className="btn btn-warning">Clear</Button></Col>
                                </Row>
                                <Row className="pt-4">
                                    <p>If already had an account please <Link to='/'>Login</Link></p>
                                </Row>
                            </center>
                        </Form>
                    }}
                </Formik>

            </CardBody>
        </Card>
    </Fragment>
}
export default Register;