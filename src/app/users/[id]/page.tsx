const UserInfo = ({ params }: { params: { id: string } }) => {
  return <h1>Hello {params.id}</h1>;
};

export default UserInfo;
