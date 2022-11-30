import {faker} from '@faker-js/faker'
import { Mappable } from './CustomMap'

export class User implements Mappable {
    name:string
    location: {
        lat: number,
        lng: number
    }
    color = 'red'
    constructor(){
        this.name = faker.name.firstName()
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        }
    }
    markerContent():string{
        return `Username: ${this.name}`
    }
}
