import "../node_modules/bootstrap/dist/css/bootstrap.css"
export default function Header(props){

return (
    <>
        
    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
     <a className="navbar-brand" href="#">{props.text}</a>
  </div>
    </nav>    

    </>
);
}