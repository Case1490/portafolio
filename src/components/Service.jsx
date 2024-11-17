const Service = ({ icon, title, paragraph }) => {
  return (
    <div className="card">
      <b></b>
      <div className="content">
        {icon}
        <h1 className="my-4 font-bold uppercase text-xl leading-6">{title}</h1>
        <p>{paragraph} </p>
      </div>
    </div>
  );
};

export default Service;
