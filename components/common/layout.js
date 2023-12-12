import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <div className="bg-gray-900" >
      <Header    />
      <main >
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;