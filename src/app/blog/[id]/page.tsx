export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

const BlogPage = ({ params }: { params: { id: string } }) => {
  return <div>youre at {params.id}</div>;
};

export default BlogPage;
