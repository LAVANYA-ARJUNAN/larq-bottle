import { Link, useNavigate } from "react-router-dom";
import {IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

function NavBar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user from localStorage on first render
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate('/');
  };

  const isAdmin = user && user.email === 'admin@gmail.com'; 

  return (
    <div style={{ position: "static", top: 0, width: "100%", backgroundColor: "white" }}>
      <section className="first">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-custom">
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav nav-links-container mx-auto">
                <li className="nav-item"><Link to="/bottle" className="nav-link">Bottles</Link></li>
                <li className="nav-item"><Link to="/pitchers" className="nav-link">Pitchers</Link></li>
                <li className="nav-item"><Link to="/shop" className="nav-link">Shop All</Link></li>

                <li className="nav-item logo-item">
                  <Link to="/" className="navbar-brand icon">
                   
                    <svg width="70px" height="20" viewBox="0 0 85 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M74.7998 16.9523C71.0144 16.9523 67.8164 13.6743 67.8164 9.79426C67.8164 5.91404 71.0144 2.63602 74.7998 2.63602C78.5852 2.63602 81.7831 5.91404 81.7831 9.79426C81.7831 11.2661 81.3218 12.6507 80.5439 13.8033L78.4165 11.642L76.6477 13.4391L78.7948 15.6206C77.654 16.4549 76.272 16.9523 74.7998 16.9523ZM84.7023 18.0283L82.5766 15.8685C83.9015 14.2143 84.6865 12.1116 84.6865 9.79426C84.6865 4.33536 80.3436 0.0597534 74.7998 0.0597534C69.2556 0.0597534 64.9127 4.33536 64.9127 9.79426C64.9127 15.2529 69.2556 19.5288 74.7998 19.5288C77.0548 19.5288 79.1111 18.8211 80.7572 17.6143L82.9335 19.8255L84.7023 18.0283Z" fill="#153A5B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0.669189 19.1244V0.462435H3.3895V16.5479H14.4834V19.1244H0.669189Z" fill="#153A5B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M46.914 10.3998H52.6442C55.633 10.3998 56.6933 8.41762 56.6933 6.7196C56.6933 5.0218 55.633 3.0396 52.6442 3.0396H46.914V10.3998ZM55.8915 19.1244L51.8878 12.977H46.914V19.1244H44.1937V0.462457H52.9192C56.8037 0.462457 59.4137 2.97674 59.4137 6.7196C59.4137 9.23828 57.7643 11.3851 55.2114 12.188L54.6711 12.3583L59.339 19.1244H55.8915Z" fill="#153A5B"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.5083 19.1244L29.222 4.86485L34.8847 19.1244H37.9185L30.7063 1.82419C30.3621 0.998699 29.5655 0.462435 28.6831 0.462435H22.8782V0.945072C22.8782 1.99892 23.719 2.8532 24.7565 2.8532H27.4969L20.4986 19.1244H23.5083Z" fill="#153A5B"></path>
                    </svg>
                  </Link>
                </li>

                <li className="nav-item"><Link to="/tech" className="nav-link">Technology</Link></li>
                <li className="nav-item"><Link to="/water" className="nav-link">Water Quality</Link></li>

                {!user && (
          <>
            <li className="nav-item"><Link to="/signin" className="nav-link">Login</Link></li>
            <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
          </>
        )}

        {user && (
          <>
            <li className="nav-link">Hello, {user.name}</li>
            {!isAdmin && <li><Link to="/"></Link></li>}
            {isAdmin && <li><Link to="/admin"></Link></li>}
            <li><button onClick={handleLogout} className="btn nav-link">Logout</button></li>
          </>
        )}

                <li className="nav-item">
                  
                    <Link to="/cart" className="nav-link"><IoCartOutline size={24} /></Link>
                
                </li>

                <li className="nav-item">
                  {/* <Link to="/dashboard" className="nav-link" style={{ color: "black", textDecoration: "none" }}>Admin</Link> */}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
