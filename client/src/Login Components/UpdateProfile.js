// import { Formik } from "formik";
// import { Fragment } from "react"
// import { Button, Card, CardBody } from "reactstrap";
// import InputBox from "../Components/InputBox";
// import PageHeader from '../Components/PageHeader'

// const UpdateProfile = () => {
//     const handleValueChange = (name, value) => {

//     }
//     const handleSubmit = (values) => {

//     }
//     return <Fragment>
//         <PageHeader header="Update Profile" />
//         <Formik
//             initialValues={{}}
//             onSubmit={(values) => handleSubmit(values)}
//         >
//             {({ values, errors, setFieldValue }) => {
//                 return <Card>
//                     <CardBody>
//                         <div className="pl-3">
//                             <div className="div-space-around pl-3">
//                                 <div>
//                                     <InputBox label='First Name' name='firstName' value={values['firstName']}
//                                         handleChange={(name, value) => handleValueChange(name, value)} />
//                                 </div>
//                                 <div>
//                                     <InputBox label='Last Name' name='lastName' value={values['lastName']}
//                                         handleChange={(name, value) => handleValueChange(name, value)} />
//                                 </div>
//                             </div>
//                             <div className="div-space-around pl-3">
//                                 <div>
//                                     <InputBox label='Email' name='email' value={values['email']}
//                                         handleChange={(name, value) => handleValueChange(name, value)} />
//                                 </div>
//                                 <div>
//                                     <InputBox label='MobileNumber' name='mobileNumber' value={values['mobileNumber']}
//                                         handleChange={(name, value) => handleValueChange(name, value)} />
//                                 </div>
//                             </div>
//                             <div className="div-space-around pl-3">
//                                 <div>
//                                     <InputBox label='Password' name='password' value={values['password']}
//                                         handleChange={(name, value) => handleValueChange(name, value)} />
//                                 </div>
//                                 <div>
//                                     <InputBox label='Confirm Password' name='confirmPassword' value={values['confirmPassword']}
//                                         handleChange={(name, value) => handleValueChange(name, value)} />
//                                 </div>
//                             </div>
//                             <div className="pt-5 pl-3">
//                                     <Button>Update</Button>
//                                 </div>
//                         </div>
//                     </CardBody>
//                 </Card>
//             }}
//         </Formik>

//     </Fragment>
// }
// export default UpdateProfile;