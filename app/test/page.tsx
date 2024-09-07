export default async function Test() {
  let post = await fetch(process.env.NEXTAUTH_URL + '/api/example');
  let result = await post.json();
  console.log({ result });

  return (
    <div>
      <h2>Posts</h2>
    </div>
  );
}
