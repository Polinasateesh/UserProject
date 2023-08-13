import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import NavBar from './NavBar'
const ContactForm = lazy(() => import("./ContactForm"));
const ContactDetails = lazy(() => import("./ContactDetails"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <ContactForm />
              </Suspense>
            }
          />
          <Route
            path="ContactDetails"
            element={
              <Suspense fallback={<p>Loading...</p>}>
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