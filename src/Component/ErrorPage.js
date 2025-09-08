import { useRouteError,useNavigate } from "react-router-dom";
import {
  
  Button,
  ButtonGroup,
} from "react-bootstrap";
export default function ErrorPage() {
  const error = useRouteError();
 const navigation = useNavigate()

  return (
    <div id="error-page" className="text-center m-5" >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {/* replce errror in history stack with Homepage */}
      <Button variant="link" onClick={ () => navigation("/",{replace:true})}>Link</Button>
    </div>
  );
}