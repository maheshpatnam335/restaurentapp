import { Form, Formik } from "formik";
import { Button } from "reactstrap";
import PageHeader from "./Components/PageHeader";
import { useHistory } from "react-router-dom";
import React from "react";

const Welcome = (props) => {
    const history=useHistory();
    const AddItem = (values) => {
        history.push('/addItem');
    }

    const ItemList = (values) => {
        history.push('/ItemList');
    }
    return <div>
        <Formik
            initialValues={{}}>
            <Form>
                <div className="text-center" ><PageHeader header="Welcome to dive in restaurent" /></div>
                <div style={{ margin: "0px 100px 0px 100px" }} className="d-flex" >
                    <Button className="bg-success form-control" onClick={() => AddItem()}>Add Item</Button>
                    <Button className="bg-success form-control" onClick={() => ItemList()}> Item List</Button>
                    <Button className="bg-success form-control" >Today's Items</Button>
                    <Button className="bg-success form-control" >Add Item</Button>
                </div>
            </Form>
        </Formik>
    </div>
}
export default Welcome;