import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookList from "./pages/BookList";
import BookNew from "./pages/BookNew";
import LendingList from "./pages/LendingList";
import LendingNew from "./pages/LendingNew";
import UserList from "./pages/UserList";
import UserNew from "./pages/UserNew";

export default function App() {
  return (
    <BrowserRouter>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-2">
              <aside className="menu">
                <p className="menu-label">貸出管理</p>
                <ul className="menu-list">
                  <li>
                    <Link to="/lendings/new">貸出</Link>
                  </li>
                  <li>
                    <Link to="/lendings/list">返却</Link>
                  </li>
                </ul>
                <p className="menu-label">書籍管理</p>
                <ul className="menu-list">
                  <li>
                    <Link to="/books/new">書籍登録</Link>
                  </li>
                  <li>
                    <Link to="/books/list">書籍一覧</Link>
                  </li>
                </ul>
                <p className="menu-label">利用者管理</p>
                <ul className="menu-list">
                  <li>
                    <Link to="/users/new">利用者登録</Link>
                  </li>
                  <li>
                    <Link to="/users/list">利用者一覧</Link>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="column is-10">
              <Routes>
                <Route path="/lendings/new" element={<LendingNew />} />
                <Route path="/lendings/list" element={<LendingList />} />
                <Route path="/books/new" element={<BookNew />} />
                <Route path="/books/list" element={<BookList />} />
                <Route path="/users/new" element={<UserNew />} />
                <Route path="/users/list" element={<UserList />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
}
