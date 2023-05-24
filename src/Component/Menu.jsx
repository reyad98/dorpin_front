import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "In the problem statement tyuu In the problem statement tyuu",
  //     desc: "আমি একদিন বিদেশে ঘুরতে যাওয়ার স্বপ্ন দেখছিলাম। সেই দিনগুলো সম্ভবত আমার জীবনের সেরা দিনগুলোর মধ্যে থাকবে। অনেকদিন পর পুর্বে কিছু নতুন দেশ এবং সংস্কৃতি অনুভব করার ইচ্ছা আমাকে মনে করতো।",
  //     img: "https://www.gstatic.com/webp/gallery/4.jpg",
  //   },

  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     desc: "আমি একদিন বিদেশে ঘুরতে যাওয়ার স্বপ্ন তেই আমি আমার ভ্রমণের জন্য যে দেশটি সিলেক্ট করবো তা নির্ধারণ করতে হল। বিভিন্ন পর্যটন ওয়েবসাইট, ট্রেভেল গাইড এবং বন্ধুদের মতামত বিচার করে আমি একটি সুন্দর দেশের নাম পেয়ে গেলাম - বাংলাদেশ।",
  //     img: "https://www.gstatic.com/webp/gallery/2.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "this is a way of number theory you",
  //     desc: "lorem100 The purpose of JSX in React is to write HTML-like syntax in JavaScript. JSX is an extension to JavaScript that allows you to define the structure and content of React components using a syntax similar to HTML. It provides a convenient way to describe the UI hierarchy and elements within a React component.",
  //     img: "https://www.gstatic.com/webp/gallery/3.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     desc: "lorem100 The purpose of JSX in React is to write HTML-like syntax in JavaScript. JSX is an extension to JavaScript that allows you to define the structure and content of React components using a syntax similar to HTML. It provides a convenient way to describe the UI hierarchy and elements within a React component.",
  //     img: "https://www.gstatic.com/webp/gallery/4.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //     desc: "lorem100 The purpose of JSX in React is to write HTML-like syntax in JavaScript. JSX is an extension to JavaScript that allows you to define the structure and content of React components using a syntax similar to HTML. It provides a convenient way to describe the UI hierarchy and elements within a React component.",
  //     img: "https://www.gstatic.com/webp/gallery/5.jpg",
  //   },
  // ];

  return (
    <div className="menu">
      <h1>Other post you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="" />
          <h2>{post.title}</h2>
          <button>Read more</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
