import { useState } from "react/cjs/react.development";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [auth, setAuth] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();
        setIsPending(true);
        const blog = { title, body, auth};
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog),
        }).then(()=>{
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })
    }
    return (
        <div className="create">
            <h1>Add A New Blog:</h1>
            <form
                onSubmit={handleSubmit}
            >
                <label>Blog Title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog Post: </label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                />
                 <label>Blog Author: </label>
                <select
                    value={auth}
                    onChange={(e)=>setAuth(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}

export default CreateBlog;