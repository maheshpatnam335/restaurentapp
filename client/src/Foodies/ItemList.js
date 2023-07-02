import { Form, Formik } from "formik";
import PageHeader from "../Components/PageHeader";
import Welcome from "../Welcome";
import { useEffect, useState } from "react";
import axios from "axios";
import UseMyTable from "../Components/Table";
const columns = [{ Header: "Item Name", accessor: "itemName" },
{ Header: "Item Cost", accessor: "itemCost" },
{ Header: "Item Quantity", accessor: "itemQuantity" },
{ Header: "Item Availability", accessor: "Available" }]
const ItemList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/getItems').then((res) => {
            debugger
            setData(res.data)
        })
    }, [])
    return <div>
        <Welcome />
        <p className="text-center"> <PageHeader header="Items List" /></p>
        <Formik
            initialValues={{}}>
            {({ values, errors }) => {
                return <Form>
                    <UseMyTable columns={columns} data={data} />
                </Form>
            }}

        </Formik>
    </div>
}
export default ItemList;