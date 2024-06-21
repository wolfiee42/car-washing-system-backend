import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.route";
import { serviceRoutes } from "../modules/service/service.route";
import { slotRoute } from "../modules/slot/slot.route";
import { bookingRoute } from "../modules/bookings/booking.route";
import { indBookingRoute } from "../modules/individualBooking/indBooking.route";

const router = Router();


const moduleRoutes = [
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/services',
        route: serviceRoutes
    },
    {
        path: '/slots',
        route: slotRoute,
    },
    {
        path: '/bookings',
        route: bookingRoute,
    },
    {
        path: '/my-bookings',
        route: indBookingRoute,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route))


export default router;