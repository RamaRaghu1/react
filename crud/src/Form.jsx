import React, { useEffect, useState } from 'react'
import { postData, updatePost } from './api/PostApi';

const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
    const [addData, setAddData] = useState({
        title: "",
        body: ""
    })

    const handleChange = (e) => {
        const { value, name } = e.target;
        setAddData((prev) => ({
            ...prev,
            [name]: value

        }))
    }

    const updatePostData = async () => {
        const res = await updatePost(updateDataApi.id, addData)
        console.log(res)
        if (res.status === 200) {
            setData((prev) => {
                return prev.map((currElem) => {
                    return currElem.id === res.data.id ? res.data : currElem
                })
            })
            setUpdateDataApi({})
            setAddData({ title: '', body: '' })
        }

    }


    const addPostData = async () => {
        const res = await postData(addData)
        if (res.status === 201) {
            setData([res.data, ...data])
            setAddData({ title: '', body: '' })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const action = e.nativeEvent.submitter.value;
        if (action === 'Add') {
            addPostData(addData)
        } else if (action === 'Edit') {
            updatePostData();
        }

    }

    const isEmpty = Object.keys(updateDataApi).length === 0;

    console.log(isEmpty)
    useEffect(() => {
        setAddData(updateDataApi)
    }, [updateDataApi])
    console.log(addData)

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title"></label>
                <input type="text" onChange={(e) => handleChange(e)} autoComplete='off' value={addData.title} id='title' name="title" placeholder='Add Title' />
            </div>
            <div>
                <label htmlFor="body"></label>
                <input type="text" onChange={(e) => handleChange(e)} autoComplete='off' value={addData.body} id='body' name="body" placeholder='Add Post' />
            </div>
            <button type='submit' value={isEmpty ? "Add" : "Edit"}>{isEmpty ? "Add" : "Edit"}</button>
        </form>
    )
}

export default Form
