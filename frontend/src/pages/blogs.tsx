import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const blogPosts = [
  {
    title: "Deploying a Spring Boot App to Kubernetes with Docker",
    date: "10 July, 2025",
    comments: 12,
    image:
      "https://ik.imagekit.io/pavanagulla19/springboot-blog.png?updatedAt=1752913325427",
  },
  {
    title: "Implementing Google & GitHub OAuth2 Login in Spring Boot",
    date: "3 July, 2025",
    comments: 18,
    image:
      "https://ik.imagekit.io/pavanagulla19/AuthO-blog.jpg?updatedAt=1752913852144",
  },
  {
    title: "Building a Custom PaaS Platform Like Render using Java & K8s",
    date: "27 June, 2025",
    comments: 30,
    image:
      "https://ik.imagekit.io/pavanagulla19/paas-blog.webp?updatedAt=1752917901748",
  },
  {
    title: "Offline-First P2P Messaging App with React Native & WebSockets",
    date: "19 June, 2025",
    comments: 9,
    image:
      "https://ik.imagekit.io/pavanagulla19/messagingp2p-blog.jpg?updatedAt=1752918043844",
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 4 },
  desktop: { breakpoint: { max: 1280, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const Blogs: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-purple-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Blog
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          I share what I build and learn — from cloud platforms to full-stack
          architecture. Here are some of my recent posts.
        </p>

        <div className="mt-12">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={false}
            showDots={true}
            arrows={false}
            renderDotsOutside={true}
            itemClass="px-2"
          >
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover object-center rounded-t-xl"
                />

                <div className="p-4 text-left">
                  <p className="text-xs text-gray-400 mb-1">
                    {post.date} / {post.comments} Comments
                  </p>
                  <p className="text-sm font-medium text-gray-800 leading-snug">
                    {post.title}
                  </p>
                </div>
                
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
