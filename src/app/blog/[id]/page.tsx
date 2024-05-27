export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

const BlogPost = ({ params }: { params: { id: string } }) => {
  return <div>youre at {params.id}</div>;
};

export default BlogPost;
