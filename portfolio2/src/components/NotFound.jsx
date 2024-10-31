import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main style={{ padding: "1rem" }}>
      <p>404 ROUTE NOT FOUND</p>
      <Link to="/">Back Home</Link>
    </main>
  );
};
