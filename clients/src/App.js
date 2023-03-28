import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Mainpage from "./Features/Mainpage/Mainpage";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Navbar />
      </nav>
      <main className="content">
        <Mainpage />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
