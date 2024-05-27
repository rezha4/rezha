const BlogPost = ({ params }: { params: { id: string } }) => {

  return <div>youre at {params.id}</div>;
};

export default BlogPost;
