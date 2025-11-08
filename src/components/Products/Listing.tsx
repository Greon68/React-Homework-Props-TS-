export type ListingType = {
    url:string ,
    MainImage : {
        url_570xN:string },
    title: string,
    currency_code: string,
    price: string ,
    quantity :number
}

type ItemProps = {
    item: ListingType,   
}

const currencySymbols: Record<string, string> = {
    "USD":"$",
    "GBP":"£",
    "EUR":"€"
}

export const Listing =({item}:ItemProps)=>{
  
    return (
       <div className="product-card">
            <a href={ item.url ? item.url : "" } className="proruct-url">
                <img className="product-image" src={item.MainImage.url_570xN} alt="" />
                <div className="product-info">
                    <h3 className="product-title">
                        {item.title.length > 50 ? item.title.slice(0, 50) + '...': item.title }
                    </h3>
                    <div className="price-container">
                        <div className="product-price">
                                { item.currency_code in currencySymbols 
                                    ? currencySymbols[item.currency_code]
                                    : 'CAD'
                                } 
                                { item?.price }
                        </div>
                        <span className={                           
                            item.quantity < 10 ? "stock-badge stock-low" :
                            item.quantity < 20 ? "stock-badge stock-medium" :
                            "stock-badge stock-high" 
                            }>{item.quantity}left</span>
                    </div>
                </div>  
            </a>
       </div>
    )
}


       



