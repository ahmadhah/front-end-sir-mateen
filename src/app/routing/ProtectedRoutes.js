import { Redirect, Route } from 'react-router-dom'

function ProtectedRoute({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={
        (props) =>(
          localStorage.getItem("authToken") ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        )
      }
    />
  )
}

export default ProtectedRoute