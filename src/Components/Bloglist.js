import { Link } from "react-router-dom";

const Bloglist = (props) => {
    const blog = props.blogs
    return(
        <div className="blog-list">
            <h1>{props.title}</h1>
            {blog.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );

}

export default Bloglist;