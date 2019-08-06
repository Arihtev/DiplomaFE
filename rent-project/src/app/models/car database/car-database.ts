export interface IcarApiMakesResponse{
    Makes: IMake[]
}

export interface IcarApiModelsResponse{
    Models: IModel[]
}

export interface IMake{
    make_id: string,
    make_display: string,
    make_is_common: string,
    make_country: string
}

export interface IModel{
    model_name: string,
    model_make_id: string
}

export interface IcarApiYearsResponse{
    errors: number,
    result: IYear[]
}


export interface IYear{
    year: string
}

export interface IEngine{
    id: string,
    type: string
}