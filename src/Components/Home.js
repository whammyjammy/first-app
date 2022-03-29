
import { useState } from "react";
import useFetch from "../CustomHooks/useFetch";
import Bloglist from "./Bloglist";
const Home = () => {
    const [name, setName] = useState('Hello');
    const url = 'http://localhost:8000/blogs';
    const {data: blog, pending, error} = useFetch(url);
    return(
        <div className="content">
            <h1>Homepage</h1>
            {pending && <div><h1>Loading.....</h1></div>}
            {error && <div><h1>{error}</h1></div>}
            {blog && <Bloglist blogs={blog} title="All Blogs"/>}
            {blog && <Bloglist blogs={blog.filter((blog)=>blog.author === 'yoshi')} title="Yoshi's Blogs" />}
            <p>{name}</p>
            <button onClick={()=>setName('World')}> Change Name</button>
        </div>
    );

}

export default Home;