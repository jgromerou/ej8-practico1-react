import 'bootstrap/dist/css/bootstrap.min.css';

const Helloworld = ({ name }) => {
  return (
    <h1 className="display-3">
      Hello <span className="text-info fw-bold">{name}</span>
    </h1>
  );
};

export default Helloworld;
