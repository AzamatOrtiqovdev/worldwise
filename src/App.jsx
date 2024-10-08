import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useState, useEffect } from "react";
const BASE_URL = "http://localhost:8000";


function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path="product" element={<Product />}/>
          <Route path="pricing" element={<Pricing />}/>
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList cities={cities} isLoading={isLoading}/>}/>
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>}/>
            <Route path="countries" element={<p>Countries</p>}/>
            <Route path="form" element={<p>Form</p>}/>
          </Route>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
