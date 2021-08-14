import React from 'react';
import {useParams} from 'react-router-dom';
export default function SingleStory(props){
    const [st, setSt]=React.useState({})
    const {id}=useParams();
    React.useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_KEY}/posts/id/${id}`).then(resp=>resp.json()).then(res=>setSt(res))
    }, [])
    return (
        <>
        <h1>{st.title}</h1>
        <h2>{st.content}</h2>
        <img src={st.img} />
        Views: {st.likes}
        </>
    )
}