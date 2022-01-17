import "./works.scss";

export default function Works() {

    const data = [
        {
            
        }

    ]

  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="./assets/cell-phone.png" alt="cell-phone"/>
                </div>
                <h1>Title</h1>
                <p>Lorem ipsum dolor</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="./assets/three-little-dogs.jpg" alt="dogs"/>
            </div>
          </div>
        </div>
      </div>
      <img src="./assets/arrow.png" className="arrow left" alt="arrow" />
      <img src="./assets/arrow.png" className="arrow right" alt="arrow" />
    </div>
  );
}
