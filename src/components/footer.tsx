export default function Footer() {
  return (
    <>
      <footer className="footer pt-3  ">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              Copyright ©{" "}
              <script>document.write(new Date().getFullYear())</script>
              &nbsp;ACINUTS by 
              <a
                href="https://www.creative-tim.com"
                className="text-dark ms-1"
                target="_blank"
              >
                OMGTechMinds
              </a>
              .
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a
                  href="https://www.omgtechminds.com"
                  className="nav-link text-sm text-muted"
                  target="_blank"
                >
                  OMGTechMinds
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.omgtechmins.com"
                  className="nav-link text-sm text-muted"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
            
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}


