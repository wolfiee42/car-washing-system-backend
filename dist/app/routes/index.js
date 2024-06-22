"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const service_route_1 = require("../modules/service/service.route");
const slot_route_1 = require("../modules/slot/slot.route");
const booking_route_1 = require("../modules/bookings/booking.route");
const indBooking_route_1 = require("../modules/individualBooking/indBooking.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.authRoutes
    },
    {
        path: '/services',
        route: service_route_1.serviceRoutes
    },
    {
        path: '/slots',
        route: slot_route_1.slotRoute,
    },
    {
        path: '/bookings',
        route: booking_route_1.bookingRoute,
    },
    {
        path: '/my-bookings',
        route: indBooking_route_1.indBookingRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
