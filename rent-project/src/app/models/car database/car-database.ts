export interface carApiResponse{
    Makes: carApi[]
}

export interface carApi{
    make_id: string;
    make_display: string;
    make_is_common: string;
    make_country: string;
}