import React, { useCallback, useRef } from 'react'
import { deletePost, getPost } from './api/PostApi'
import { useEffect } from 'react'
import { useState } from 'react'
import Form from './Form'
const Posts = () => {
    const [data, setData] = useState([])
    const [updateDataApi, setUpdateDataApi] = useState({})
    const [page, setPage] = useState(2);
    const [intersecting, setIntersecting] = useState(false);
    const [loading, setLoading] = useState(false);
    const loadRef = useRef(null);

    const getPostData = async () => {
        const res = await getPost(page);

        return res.data;
    }

    const getData = useCallback(async () => {
        setLoading(true);
        const data = await getPostData();

        setData((prev) => [...prev, ...data])
        setLoading(false)

    }, [page])

    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setIntersecting(entries[0].isIntersecting);
        })


        if (intersecting) {
            setPage((prev) => prev + 1)
            getData();
        }
        if (loadRef.current) observer.observe(loadRef.current);

        return () => {
            if (loadRef.current) observer.unobserve(loadRef.current);
        }


    }, [intersecting])

    const handleDeletePost = async (id) => {

        try {
            const res = await deletePost(id)
            if (res.status === 200) {
                const updatedPosts = data.filter((item) => item.id !== id)
                setData(updatedPosts)
            }
        } catch (error) {
            console.log(error)
        }

    }

    const handleUpdatePost = (item) => setUpdateDataApi(item)
    useEffect(() => {
        const fetchData = async () => {
            const data = await getPostData(1);
            setData(data);
        };
        fetchData();
    }, [])
    return (
        <>
            <section className='section-form'>
                <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi} />
            </section>
            <section className='section-post'>
                <ol>
                    {data && data.map((item) => {
                        const { id, body, title } = item;
                        return (
                            <li key={id}>
                                <p>{title}</p>
                                <p>{body}</p>
                                <button onClick={() => handleUpdatePost(item)}>Edit</button>
                                <button onClick={() => handleDeletePost(id)} className='btn-delete'>Delete</button>
                            </li>)
                    })}
                </ol>
                <p ref={loadRef}>Loading..</p>
            </section>
        </>
    )
}

export default Posts