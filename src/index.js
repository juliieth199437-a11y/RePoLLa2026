import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{background:"#0A0E1A",minHeight:"100vh",display:"flex",
          alignItems:"center",justifyContent:"center",padding:20}}>
          <div style={{background:"#1a0000",border:"1px solid #ff4444",borderRadius:12,
            padding:24,maxWidth:600,color:"#ff8888"}}>
            <h2 style={{marginBottom:12,color:"#ff4444"}}>Error en la app</h2>
            <pre style={{fontSize:11,whiteSpace:"pre-wrap",overflow:"auto"}}>
              {this.state.error && this.state.error.toString()}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
