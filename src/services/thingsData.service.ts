import { Injectable } from "@angular/core";


@Injectable()
export class thingsDataService{
    public thingsDummyData:any=[]
    constructor(){
        this.thingsDummyData = [
            {
                name : "Men's sandals",
                value: 10,
                Description: "Easy to wear, comfortable sandals for a perfect summer day. Fashionable and trendy.",
                Summary: "Worn just 3-4 times. Dont fit me anymore, so want to swap this for something more useful. Size-8. Color- back and grey",
                id: 'ksjn-hs88820-383023',
                imgUrl: '../assets/imgs/sandal.jpg'
            },
            {
                name : "backpack",
                value: 10,
                Description: "Under Armour Backpack. Can be used as office bag, student bag or as a travle kit for short trips",
                Summary: "Very spacious for a weekend trip. Can easily carry big laptop. Water-proof. Enough space. Used for about 6 months. Very strong material",
                id: 'ksjn-hs88820-383024',
                imgUrl: '../assets/imgs/backpack.jpg'
            },
            {
                name : "Water Filter",
                value: 10,
                Description: "Water filter for healthy living.",
                Summary: "Brita made. In working condition. Regularly cleaned and maintained in good condition. Filter change indicators working as well.",
                id: 'ksjn-hs88820-383025',
                imgUrl: '../assets/imgs/brita water filter.jpg'
            },
            {
                name : "Coffee Table",
                value: 10,
                Description: "Coffee table with glass table top. Rounded top.",
                Summary: "Elegant finish. Serves right purpose for a coffee meet or as a side table for dining hall. Can be easily transported.",
                id: 'ksjn-hs88820-383025',
                imgUrl: '../assets/imgs/center table.jpg'
            },
            {
                name : "Revolving Chair",
                value: 10,
                Description: "Black chair for multi-purpose use. Revolving seat with strong back support.",
                Summary: "Add luxury to your room or living area with this chair. revolving and adjustable seat. Wheels in perfect working condition.",
                id: 'ksjn-hs88820-383025',
                imgUrl: '../assets/imgs/chair.jpg'
            },
            {
                name : "Couch Pillow",
                value: 10,
                Description: "Couch cushion for your couch or bed.",
                Summary: "Pair of cushions with stylish designed covers and free of dust or feathers. Always used inside house with no pets.",
                id: 'ksjn-hs88820-383025',
                imgUrl: '../assets/imgs/couch pillow.jpg'
            },
            {
                name : "Flower Vase",
                value: 10,
                Description: "Flower Vase for your side table. Comes with the artifical flowers as shown in the pic.",
                Summary: "White colored Vase to add to your interior theme of house. Bought new about 8 months back. Flowers are included with the deal.",
                id: 'ksjn-hs88820-383025',
                imgUrl: '../assets/imgs/flowerVase.jpg'
            },
            {
                name : "Mopper",
                value: 10,
                Description: "Mopper with built-in swiffer wet-jet. Great addition to your cleaning supplies.",
                Summary: "Easy to use mopper with adjustable height and bendable rug. Reaches tough corners and beneath the furniture very easily.",
                id: 'ksjn-hs88820-383025',
                imgUrl: '../assets/imgs/mopper.jpg'
            },
            {
                name : "Night Lamp",
                value: 10,
                Description: "Night lamp. Can be used for living room or kids room.",
                Summary: "White colored standing lamp with bulb. Provides dim lights for night-time sleep time. Light weighted and easy to transport. Hood can be removed for increased light.",
                id: 'ksjn-hs88820-383025',
                imgUrl: '../assets/imgs/night lamp.jpg'
            },
            {
                name : "Planter",
                value: 10,
                Description: "Planter for inside use. Can be used for medium sized plants.",
                Summary: "Solid material to hold water inside. Brown colored pot for plants. Great for inside as well as outside use.",
                id: 'ksjn-hs88820-383025',
                imgUrl: '../assets/imgs/planter.jpg'
            }
        ]
    }
}