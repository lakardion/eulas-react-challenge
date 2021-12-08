const ComponentShow = ({ headline, children }) => {
  return (
    <div className="show-component">
      <h1>{headline}</h1>
      {children}
    </div>
  );
};
export default ComponentShow;
