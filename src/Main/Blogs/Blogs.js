import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='my-5'>
            <h1 className='text-success py-5'>Our Blogs</h1>
            <div className=' w-75 mx-auto blogs'>
                <div className="container text-start blogs-container py-5">
                    <h1>Q: Difference between Node.JS and Javascript?</h1>
                    <h4>NodeJS : </h4>
                    <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                    <h4>Java Script :</h4>
                    <p>javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
                </div>
                <div className="container text-start blogs-container py-5">
                    <h1>Q: When should you use nodejs and when should you use mongodb?</h1>
                    <p>if we want to write some kind of stand-alone program or server in Javascript, then we can use nodejs for it. If our application needs the ability to persistently store data in a way that you can efficiently query or update it later, then we would typically use some form of database. </p>
                </div>
                <div className="container text-start blogs-container py-5">
                    <h1>Q: Differences between SQL and noSQL databases.?</h1>
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON. </p>
                </div>
                <div className="container text-start blogs-container py-5">
                    <h1>Q: What is the purpose of JWT and how does it work.?</h1>
                    <p>JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;