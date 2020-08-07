import Error from '../components/Error';

const Error404Component = () => {
  const statusCode = 404;

  return <Error statusCode={statusCode} />;
};

export default Error404Component;
