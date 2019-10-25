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
}

export interface IPicture{
    picture: String
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