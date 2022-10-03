import { useState } from "react"
import FormInput from "../form-input/form-input.component"
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils"
import './sign-in-form.styles.scss'
import Button from "../button/button.component"
const defaultFormFields = {

    email: '',
    password: ''
}
const SignInForm = () => {

    const [formFields, setFormField] = useState(defaultFormFields)
    const { email, password } = formFields

    console.log(formFields)

    const resetFormField = () => {
        setFormField(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()


        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)

            console.log(response)
            resetFormField()
        } catch (error) {

            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect password for email')
                    break

                case 'auth/user-not-found':
                    alert('The email is not exists')
                    break

                default:
                    console.log(error)
            }

            // if(error.code==="auth/wrong-password"){
            //     alert('Incorrect password for email')
            // }else if(error.code==="auth/user-not-found"){
            //     alert('The email is not exists')
            // }
        }
    }
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }
    const handleChange = (event) => {

        const { name, value } = event.target
        setFormField({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Email' required onChange={handleChange} name="email" value={email} />

                <FormInput

                    label="Password" type='password' required onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">
                    <Button type="submit"
                        buttontype='default'
                    >Sign In</Button>

                    <Button
                        type='button'
                        buttontype='google'
                        onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm