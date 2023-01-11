export interface searchStringInterface {
    searchString : string
    selectNumber : Number
    selectOrder : string
    owner : ownerInterface
    name : string
    watchers : number
    forks :number
    stargazers_count : number
    updated_at :number
    description : string
    total_count :number
}
export interface ownerInterface {
    login : string
}



export interface searchStringModalInterface{
    data : searchStringInterface
}
