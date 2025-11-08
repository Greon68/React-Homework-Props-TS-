import { data } from "../../data/data"
import { Listing } from "./Listing"

export const Products = ()=> {
    return (
        <div className="container">
            <div className="product-grid">
                {
                    data.map( (item ) =>( item.MainImage &&  <Listing key={item.listing_id} item ={item}/>))
                }
               
            </div>
        </div>
    )

}




