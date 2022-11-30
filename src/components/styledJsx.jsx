export const StyledJsx =()=>{
  return (
  <>
    <div className="container">
      <p className="title">- Styled Jsx -</p>
      <button className="button">Fight</button>
    </div>
    <style jsx="true">{`
    .container{
    border: solid 2px #392eff;
    border-Radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-Content: space-around;
    align-Items: center;
  }
    .title{
    margin: 0;
    color: #3d84a8;
  }
  .button{
    background-Color: #abedd8;
    border: none;
    padding: 8px;
    border-Radius:8px;
  }
    `}</style>
  </>
  );
};