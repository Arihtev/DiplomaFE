export interface IUser{
    id: number,
    email: string,
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    photo: string,
    user_type: string,
    gender: string,
    cars_owned: number[],
    favourite_cars: number[]
}