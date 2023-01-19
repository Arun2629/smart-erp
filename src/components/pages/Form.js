import React, {useReducer} from 'react'
import MDEditor from '@uiw/react-md-editor';


const initialState = {
    title: '',
    body: '',
    formErrors: {}
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TITLE': {
            return {
                ...state, title: action.payload
            }
        }
        case 'SET_BODY': {
            return {
                ...state, body: action.payload
            }
        }
        case 'SUBMIT': {
            return {
                ...state, title: '', body: ''
            }
        }
        case 'SET_FORMERR': {
            return {
                ...state, formErrors: action.payload
            }
        }
        default: {
            return {...state}
        }
    }
}


const Form = (props) => {
    const {setPosts} = props
    const [state, dispatch] = useReducer(reducer, initialState)
    const errors = {}

    const handleInputChange = (e) => {
        dispatch({type: 'SET_TITLE', payload: e.target.value})
    }

    const handleMdChange = (e) => {
        dispatch({type: 'SET_BODY', payload: e})
    }

    const runValidation = () => {
        if (state.title.trim().length == 0){
            errors.title = "Title cannot be blank"
        }

        if (state.body.trim().length == 0){
            errors.body = "Body cannot be empty"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()

                    if (Object.keys(errors).length === 0){
                        dispatch({type: 'SET_FORMERR', payload: {}})
                        const formData = {
                            title: state.title,
                            body: state.body
                        }
                        setPosts(formData)
                        dispatch({type: 'SUBMIT'})

                    }else {
                        dispatch({type: 'SET_FORMERR', payload: errors})
                    }
        
    }
    
    return (
        <div className='form-container'>
            <h2>Post Form</h2><br/>
            <form onSubmit={handleSubmit}>
            <input className='form-item1' type='text' value={state.title} onChange={handleInputChange} placeholder='Enter Title'/>
            {
                state.formErrors.title && <span style = {{color : "red"}}>{state.formErrors.title}</span>
            }<br/><br/>
                <MDEditor
                    value={state.body}
                    onChange={handleMdChange}
                />
                 {
                     state.formErrors.body && <span style = {{color : "red"}}>{state.formErrors.body}</span>
                }<br/>
                <button type='submit' className='form-btn'>Publish</button>
            </form>
        </div>
    )
}

export default Form