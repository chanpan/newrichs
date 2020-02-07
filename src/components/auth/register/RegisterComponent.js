import React, { Component } from 'react';
import { Formik } from 'formik';
import { login } from '../../../actions/LoginAction';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { server } from "../../../constants";
import { Link } from 'react-router-dom';


class RegisterComponent extends Component {
    componentDidMount() {
        if (localStorage.getItem(server.TOKEN_KEY) != null) {
            this.props.history.push("/dashboard")
        }
    }
    showForm = ({ values, handleChange, handleSubmit, setFieldValue, errors, touched }) => {
        return (
            <form noValidate onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>Username</label>
                        <input type='text' name="username" value={values.username} onChange={handleChange} />
                    </div>
                    {errors.username && touched.username ? (
                        <div style={{ color: 'red' }}>{errors.username}</div>
                    ) : null}
                </div>
                <div>
                    <div>
                        <label>Password</label>
                        <input type='password' name="password" value={values.password} onChange={handleChange} />
                    </div>
                    {errors.password && touched.password ? (
                        <div style={{ color: 'red' }}>{errors.password}</div>
                    ) : null}
                </div>
                <div>
                    <div>
                        <label>Name</label>
                        <input type='text' name="name" value={values.name} onChange={handleChange} />
                    </div>
                    {errors.name && touched.name ? (
                        <div style={{ color: 'red' }}>{errors.name}</div>
                    ) : null}
                </div>
                <div>
                    <div>
                        <label>Tel</label>
                        <input type='text' name="tel" value={values.tel} onChange={handleChange} />
                    </div>
                    {errors.tel && touched.tel ? (
                        <div style={{ color: 'red' }}>{errors.tel}</div>
                    ) : null}
                </div>
                <div>
                    <button type='submit'>ยืนยัน</button>
                    <div>
                        <Link to="/login">
                            Login
                        </Link>
                    </div>

                </div>
            </form>
        );
    }
    render() {

        const { isFetching, isError, errMessage } = this.props.LoginReducer;
        const SignupSchema = Yup.object().shape({
            name: Yup.string().required('Name ต้องไม่เป็นค่าว่าง'),
            tel: Yup.string().required('Tel ต้องไม่เป็นค่าว่าง'),
            username: Yup.string().required('Email ต้องไม่เป็นค่าว่าง'),
            password: Yup.string().required('Password ไม่เป็นค่าว่าง'),
        });

        return (
            <div>
                {!isFetching && isError && <div style={{ color: 'red' }}>{errMessage}</div>}
                <Formik
                    validationSchema={SignupSchema}
                    initialValues={{ username: "", password: "", name: "", tel: "" }}
                    onSubmit={(values, { setSubmitting }) => {
                        let formData = new FormData()
                        formData.append("username", values.username);
                        formData.append("password", values.password);
                        this.props.login(formData, this.props.history);
                        setSubmitting(false)
                    }}>
                    {props => this.showForm(props)}
                </Formik>

            </div>
        );
    }
}
const mapStateToProps = ({ LoginReducer }) => ({
    LoginReducer,
});

const mapDispatchToProps = {
    login
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
