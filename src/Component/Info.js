import img1 from "../img/t.jpg";
import pinky from "../img/pinky.jpg";
import image4 from "../img/image4.png";
import "./Info.css";
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <div className="maincard">
      <div className="srcondcard">
        <section className="sec1">
          <article className="arfl">
            <div className="maintxt">
              <button>
                1230+ <span>item</span>
              </button>
              <h2>Table</h2>
              <p>
                floding table <br />
                desk <br />
                dining table <br />
                coffee table <br />
                <Link>view All</Link>
              </p>
            </div>
            <img src={img1} alt="dd" />
          </article>
          <article className="arf2">
            <div className="arfl">
              <div className="maintxt">
                <button>
                  1230+ <span>item</span>
                </button>
                <h2>Light</h2>
                <p>
                  chandelier <br />
                  lantern pendant <br />
                  multi light pendant <br />
                  pemdant light
                  <br />
                  <Link>view All</Link>
                </p>
              </div>
              <img src={image4} alt="dd" className="dx" />
            </div>
            <div className="d2">
              <button>Get discount</button>
              <br></br>
              <span>30% offers </span>
            </div>
          </article>
        </section>

        <aside className="asi1">
          <div className="maintxt">
            <button>
              1230+ <span>item</span>
            </button>
            <h2>chair</h2>
            <p>
              gaming chair <br />
              office chair <br />
              adriondack chair <br />
              longer chair <br />
              <Link>view All</Link>
            </p>
          </div>
          <img src={pinky} alt="dd" />
        </aside>
      </div>
    </div>
  );
};

export default Info;
