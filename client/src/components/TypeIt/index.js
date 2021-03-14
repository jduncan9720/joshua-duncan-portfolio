import TypeIt from "typeit-react";

export default (props) => {
  return (
    <div className="App">
      <TypeIt element={props.element} style={{color: 'white'}} options={props.options}></TypeIt>
    </div>
  );
};