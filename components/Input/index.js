export default function Input(props) {
  return (
    <>
      <div>
        <label htmlFor={props.name}>{props.placeholder}</label>
        <input {...props}></input>
      </div>
      <style jsx>
        {`
          div {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 10px 0;
          }
          label {
            font-weight: 800;
            font-size: 30px;
          }
          input {
            border-radius: 10%;
            height: 40px;
          }
        `}
      </style>
    </>
  );
}
