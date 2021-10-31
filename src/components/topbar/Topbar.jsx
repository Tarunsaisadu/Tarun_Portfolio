import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            T.S
          </a>
          <div className="itemContainer">
            <lord-icon
              className="icon"
              src="https://cdn.lordicon.com/tkgyrmwc.json"
              trigger="loop-on-hover"
              colors="primary:#90e0ef,secondary:#90e0ef"
              style={{ width: "35px", height: "35px" }}
            ></lord-icon>
            <span> tarunsai.rct@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
