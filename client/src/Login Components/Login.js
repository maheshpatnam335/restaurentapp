import axios from "axios"
import { Form, Formik } from "formik"
import { Fragment } from "react"
import { Link } from "react-router-dom"
import { Button, Card, CardBody, Col, Input, Row } from "reactstrap"
import * as Yup from 'yup'
import InputBox from "../Components/InputBox"
import { handleError, handleSuccess } from "../utils/Sweetalert"


const Login = (props) => {

    // const validationSchema = Yup.object().shape({
    //     email: Yup.string().required("Employee Id or Roll number is required."),
    //     password: Yup.string().required("Password is required.")
    // })



    const handleSubmit = async (values) => {
        try {

            await axios.get(`http://localhost:8080/login?email=${values.email}&password=${values.password}`).then((res) => {
                debugger

                if (res.data.hasError) {
                    handleError(res.data.messages[0].messageContent)
                    return;
                }
                if (res.data == "") {
                    handleError("Invalid details")
                } else {
                    handleSuccess("Successfully logged in.")
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                    props.history.push('/dashboard')
                }
            })

        } catch (ex) {
            handleError(ex)
        }
        //     debugger
        //     await axios.get('http://localhost:8080/getAliens',{method: 'GET',
        //     mode: 'cors'}).then((res) => {debugger
        // })
    }
    return <Fragment>
        <Row md='12' className="pt-5">
            <Col md='5'></Col>
            <Col md='3'>
                <Card className="pt-4" style={{ borderRadius: '15px' }}>
                    <CardBody>
                        <Formik
                            initialValues={{ email: '', password: '', role: '', roleId: 0 }}
                            //validationSchema={validationSchema}
                            onSubmit={(values) => handleSubmit(values)}
                        >
                            {({ errors, values, setFieldValue }) => {
                                const handleChange = (name, value) => {
                                    setFieldValue(name, value)
                                    if (value == "Students") {
                                        values.role = 1
                                    }
                                    if (value == "Teachers") {
                                        values.role = 2
                                    }
                                }
                                return <Form className="">
                                    <InputBox name='email' label='Email' handleChange={handleChange} />
                                    <p style={{ color: 'red' }}>{errors && errors.email}</p>
                                    <InputBox name='password' type='password' label='Password' handleChange={handleChange} />
                                    <p style={{ color: 'red' }}>{errors && errors.password}</p>

                                    <Row className="pt-4">
                                        <Col ><Button type="submit" className="btn btn-success">Login</Button></Col>
                                        <Col><Button type="reset" className="btn btn-danger">Clear</Button></Col>

                                    </Row>
                                    <Row className="pt-4">
                                        <p>If new user, please <Link to='/Register'>Register</Link> first</p>
                                    </Row>
                                </Form>
                            }}
                        </Formik>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Fragment>
}
export default Login;