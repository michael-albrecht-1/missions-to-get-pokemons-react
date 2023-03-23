import { useRouteError } from "react-router-dom";

export default function PageNotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="page-not-found">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}
