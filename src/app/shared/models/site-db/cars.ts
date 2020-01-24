export interface ICar{
    id: number,
    year: String,
    make: String,
    model: String,
    transmission: String,
    engine_type: String,
    category: String,
    seats: String,
    consumption: String,
    horsepower: String,
    region: String,
    city: String,
    address: String,
    zip_code: String,
    pictures: IPicture[],
    extras: IExtra[],
    description: String,
    owner: IOwner,
    reservations: IReservation[]
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

export interface IReservation{
    car_id: number,
    renter_id: number,
    start_date: string | Date,
    end_date: string | Date
}