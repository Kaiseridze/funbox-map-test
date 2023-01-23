export interface IPlacemark {
    title: string,
    id: string,
    coordinates: number[]
}

export interface InitialStatePlacemarks{
    placemarks: IPlacemark[]
}