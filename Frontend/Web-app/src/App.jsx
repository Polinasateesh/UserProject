import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavBar from './NavBar'
const ContactForm = lazy(() => import("./ContactForm"));
const ContactDetails = lazy(() => import("./ContactDetails"));
import { CircularProgress } from '@mui/material';

const App = () => {
  const CenteredCircularProgress = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh", 
      }}
    >
      <CircularProgress size={50} />
    </div>
  );
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<CenteredCircularProgress />}>
                <ContactForm />
              </Suspense>
            }
          />
          <Route
            path="ContactDetails"
            element={
              <Suspense fallback={<CenteredCircularProgress/>}>
                <ContactDetails />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;