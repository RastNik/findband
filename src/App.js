
import Header from './features/header';
import Sidebar from './features/sidebar';
import Footer from './features/footer';
import Content from './features/content';

function App() {
  return (
    <>
      <div className={"wrapper"}>
        <Header />
        <div className={"content"}>
          <div className="container">
            <div className="content__wrap">
              <aside className="content__sidebar">
                <Sidebar />
                <Footer />
              </aside>
              <main className="content__main">
                <Content />
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
