import { Routes, Route } from "react-router-dom"
import {DefaultLayout} from "../layout/DefaultLayout"
import {Home} from "../pages/Home"
import {NotFound} from "../pages/NotFound"


export function Routers() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Reservation />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}