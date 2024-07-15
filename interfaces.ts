export interface ReservationItem {
    carId: string
    carModel: string
    numOfDays: number
    pickupDate: string
    pickupLocation: string
    returnDate: string
    returnLocation: string
}

export interface CarItem {
    id: string
    model: string
    picture: string
}

export interface CarJson {
    count: number
    data: CarItem[]
}

export interface RestaurantItem {
    id: string,
    name: string,
    location: string,
    picture: string,
    open: string,
    close: string,
    averageStar: number,
    totalStars: number,
}

export interface RestaurantJson {
    count: number,
    data: RestaurantItem[]
}

export interface reservationPr {
    rid: string
}
export interface RestaurantInfo {
    id: string,
    name: string,
    _id: string,
}

export interface Reservation {
    _id: string,
    restaurant: RestaurantInfo,
    reserveDate: string,
    user: string,
}
export interface ReservationJson {
    count: number,
    data: Reservation[]
}

export interface ReviewItem {
    id: string,
    restaurantid: string,
    star: number,
    review: string
}

export interface ReviewJson {
    count: number,
    data: ReviewItem[]
}

export interface User {
    name: string,
    email: string,
    telephone: string,
    password: string,
}