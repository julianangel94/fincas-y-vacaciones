export default function Button({ title, handleClick }) {
  return (
    <>
      <div>
        <button onClick={handleClick}>{title}</button>
      </div>
      <style jsx>
        {`
          div {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 10px 0;
          }
          button {
            border-radius: 10%;
            height: 50px;
          }
        `}
      </style>
    </>
  );
}
