const Contact = (data) => {
  return (
    <div>
      <ul>
        <li>{data.name}</li>
        <li>{data.title}</li>
        <li>{data.company}</li>
      </ul>
    </div>
  );
};

export default Contact;
