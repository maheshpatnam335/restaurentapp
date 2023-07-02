import { Form, Formik } from "formik";
import PageHeader from "../Components/PageHeader";
import InputBox from "../Components/InputBox";
import { Button, Col, Input, Row } from "reactstrap";
import axios from "axios";
import { handleError, handleSuccess } from "../utils/Sweetalert";
import Welcome from "../Welcome";

const NewItem = () => {
const handleSubmit=(values)=>{debugger
    try {
         axios.post(`http://localhost:8080/AddItem`, values).then((res) => {
            if (res.data == '') {
                handleError('Email already exists.')
            } else {
                handleSuccess("Succesful");
            }
        })
    }
    catch {
        alert('Getting errror')
    }
}
    return <div>
        <Welcome/>
        <div className="text-center"> <PageHeader header="New Item" /></div>
        <Formik
            initialValues={{}}
            onSubmit={(values)=>handleSubmit(values)}
        >{({ values, errors, setFieldValue }) => {
            const handlevalueChange = (name, value) => {
                setFieldValue(name, value)
            }
            return <Form style={{ margin: '20px 300px 0px 300px' }}>
                <Row>
                    <Col> <InputBox label="Item Name" name='ItemName' handleChange={handlevalueChange} /></Col>
                    <Col> <InputBox label="Item Cost" name='ItemCost' handleChange={handlevalueChange} /></Col>
                </Row>
                <Row className="mt-4">
                    <Col ><p style={{ margin: '0px 40px 0px 0px' }}>Availability</p>
                        <div className="d-flex">  Available :  <Input type="radio" name='available' onChange={(e) => handlevalueChange(e.target.name, e.target.checked)} />
                            <div style={{ margin: '0px 20px 0px 30px' }}> Not available <Input type="radio" name='available' onChange={(e) => handlevalueChange(e.target.name, e.target.cheked)} /></div>
                        </div>
                    </Col>
                    <Col><InputBox label="Item Quantity" name='ItemQuantity' handleChange={handlevalueChange} /></Col>
                </Row>

                <Row className="mt-5">
                    <Col/>
                    <Col><Button className="bg-success">Add</Button></Col>
                    <Col><Button className="bg-info">Clear</Button></Col>
                </Row>
            </Form>
        }}

        </Formik>
    </div>
}
export default NewItem;