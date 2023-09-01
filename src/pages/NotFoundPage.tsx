import BackButton from "../components/BackButton";

const NotFoundPage = () => {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '98vh', 
            textAlign: 'center' 
        }}>
            <p style={{fontSize: '2em', marginBottom: '20px'}}>Oops (ಠ_ಠ)<br/>Page Not Found</p>
            <BackButton/>
        </div>
    );
  };
  
  export default NotFoundPage;