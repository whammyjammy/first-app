import { useParams, useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import useFetch from "../CustomHooks/useFetch";

const BlogDetails = ()=>{
    const { id } = useParams();
    const history = useHistory();
    const [isPending, setIsPending] = useState(false);
    const {data:blog, pending, error } = useFetch('http://localhost:8000/blogs/'+ id);
    const handleClick = () =>{
        setIsPending(true);
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method: 'DELETE',
        }).then(()=>{
            setIsPending(false);
            history.push('/');
        });
    }
    return (
        <div className="blog-details">
            {pending && <div><h2>lodading...</h2></div>}
            {error && <div><h2> {error}</h2></div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    {!isPending && <button onClick={handleClick}>Delete blog</button>}
                    {isPending && <button>Deleting Blog..</button>}
                </article>
            )}

        </div>
    );
}
export default BlogDetails;