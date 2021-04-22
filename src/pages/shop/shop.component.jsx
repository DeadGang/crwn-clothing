import React from 'react';
import SHOP_DATA from'./shop.data.js';
import CollectionPreview from'../../components/preview-collection/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            collecttions: SHOP_DATA
            
        }
    }
    render(){
        const {collecttions}=this.state;
        return (<div className ='shop-page'>
            {
                collecttions.map(({id, ...otherCollectionProps}) =>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }

        </div>);
    }
}
export default ShopPage;