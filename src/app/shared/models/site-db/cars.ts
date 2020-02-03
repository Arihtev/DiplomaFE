import { IUser } from '../authentication/user';

export interface ICar{
    id: number,
    year: number,
    make: String,
    model: String,
    transmission: String,
    engine_type: String,
    category: String,
    seats: String,
    consumption: number,
    horsepower: String,
    region: String,
    city: String,
    address: String,
    zip_code: number,
    pictures: IPicture[],
    extras: IExtra[],
    description: String,
    owner: IOwner,
    reservations?: IReservation[],
    reviews?: IReview[],
    weekly_discount: number,
    monthly_discount: number,
    price: number,
    rating?: number,
    times_rented?: number
}

export interface IPicture{
    picture: string
}

export interface IExtra{
    id: number,
    category_id: number,
    name: String
}

export interface IOwner{
    id: number,
    username: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    photo: String
}

export interface IFilters{
    region: {name: String},
    city: {name: String},
    start: Date,
    end: Date
}

export interface ICreateReservation{
    car_id: number,
    renter_id: number,
    start_date: string | Date,
    end_date: string | Date,
    status: string,
    total_price: string,
    days_reserved: number,
    present: boolean
}

export interface IReservation{
    id: number,
    car_id: ICar,
    renter_id: IUser,
    start_date: string | Date,
    end_date: string | Date,
    status: string,
    total_price: string,
    days_reserved: number,
    present: boolean
}

export interface IReview{
    car_id: number,
    reservation: number,
    comment: string,
    rete: number,
    date: string
}