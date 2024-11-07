import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import {Home} from "../pages/Home";
import NotFound from "../pages/NotFound/NotFound";
import {Reservation} from "../pages/Reservation/Reservation";
import { Booking} from "../pages/Booking/Booking";
import { Users } from "../pages/Users/Users";


export function Routers() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/salas" element={<Reservation />} />
        <Route path="/reservas" element={<Booking />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}