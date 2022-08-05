// import {useState} from "react"
// const  ErrorBoundary = ()=> {
//     const [hasError , setHasError] = useState(false)
    
  
//     const  getDerivedStateFromError(error) ={
//       // Update state so the next render will show the fallback UI.
//       return { hasError: true };
//     }
  
//     componentDidCatch(error, errorInfo) {
//       // You can also log the error to an error reporting service
//       logErrorToMyService(error, errorInfo);
//     }
  
//     render() {
//       if (this.state.hasError) {
//         // You can render any custom fallback UI
//         return <h1>Something went wrong.</h1>;
//       }
  
//       return this.props.children; 
//     }
//   }


import { withErrorBoundary, useErrorBoundary } from "react-use-error-boundary";

const ErrorBoundary = withErrorBoundary(({ children }) => {
  const [error, resetError] = useErrorBoundary(
    // You can optionally log the error to an error reporting service
    (error, errorInfo) => console.log(error, errorInfo)
  );

  if (error) {
    return (
      <div>
        <p>{error.message}</p>
        <button onClick={resetError}>Try again</button>
      </div>
    );
  }

  return <div>{children}</div>;
});


export default ErrorBoundary

