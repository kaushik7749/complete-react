import React from "react";
import ReactDOM from "react-dom/client";

/**
Header
      -logo
      -nav items
      -cart
Body 
      -search bar
      -restaurant list
        -restaurant card(many cards)
            -image
            -name
            -rating
            -cuisines
Footer
      -links
      -copyrights
 * 
 */


const Title = () => (
    // <a href"/": If we click our logo it wiil redirect us to home page
    <a href="/">    
    <img
    className="logo"
    alt="logo" src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"/>
    </a>
);


const Header = () => {
    return (
    <div className="header">
         <Title />
       <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
       </div>
    </div>
    );
};

//The restaurant and restaurant card and also the carousels which city has the offers
//-will dynamically change the UI this type of UI is known as config driven UI
const restaurantList = [
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "657142",
            name: "Punjabi Angithi (Delhi Wale)",
            uuid: "269728de-0f94-4ea2-a78a-63f28ff53347",
            city: "22",
            area: "Hathibarkala",
            totalRatingsString: "500+ ratings",
            cloudinaryImageId: "0a59d45ca92d85e5f63f5bc79f3dbb33",
            cuisines: [
                "North Indian",
                "Chinese",
                "Punjabi",
                "Kebabs",
                "Tandoor"
            ],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            deliveryTime: 38,
            minDeliveryTime: 38,
            maxDeliveryTime: 38,
            slaString: "38 MINS",
            lastMileTravel: 4.400000095367432,
            slugs: {
                restaurant: "punjabi-angithi-hathibarkala-hathibarkala",
                city: "dehradun"
            },
            cityState: "22",
            address: "VEGORAMA PUNJABI ANGITHI PVT LTD PARSVNATH ELEGANZA MALL 103, RAJPUR  ROAD DEHRADUN, Dehradun,  Uttarakhand-248009",
            locality: "Rajpur Road",
            parentId: 4464,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FLAT150 off",
                shortDescriptionList: [
                    {
                        meta: "FLAT150 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FLAT150 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "₹150 OFF",
                shortDescriptionList: [
                    {
                        meta: "Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FLAT150 off | Use FLATDEAL",
                        discountType: "Flat",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            ribbon: [
                {
                    type: "PROMOTED"
                }
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "cid=6055004~p=1~eid=00000186-bc41-630b-00bf-bc9a00810134",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "4.4 kms",
            hasSurge: false,
            sla: {
                restaurantId: "657142",
                deliveryTime: 38,
                minDeliveryTime: 38,
                maxDeliveryTime: 38,
                lastMileTravel: 4.400000095367432,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: true,
            avgRating: "4.0",
            totalRatings: 500,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "69499",
            name: "Uss Da Dhaba",
            uuid: "be843f94-4bb1-446f-854a-fed73c5f5926",
            city: "22",
            area: "Race Course",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "j6w0gbsy2pdoivjjlymp",
            cuisines: [
                "North Indian",
                "Chinese",
                "Continental"
            ],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 25,
            minDeliveryTime: 25,
            maxDeliveryTime: 25,
            slaString: "25 MINS",
            lastMileTravel: 1.2000000476837158,
            slugs: {
                restaurant: "uss-da-dhaba-race-course-chukkuwala",
                city: "dehradun"
            },
            cityState: "22",
            address: "Near Hotel Saurab, 3 Court Road, Race Course, Dehradun",
            locality: "Court Road",
            parentId: 13693,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "1.2 kms",
            hasSurge: false,
            sla: {
                restaurantId: "69499",
                deliveryTime: 25,
                minDeliveryTime: 25,
                maxDeliveryTime: 25,
                lastMileTravel: 1.2000000476837158,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.7",
            totalRatings: 10000,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "69769",
            name: "Aman Vegetarian",
            uuid: "4ef9eafb-9c6d-4e9b-b1e9-0bbd0e88f9ef",
            city: "22",
            area: "Paltan Bazaar",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "ygczg6efdbjietl1req7",
            cuisines: [
                "North Indian",
                "Chinese",
                "Continental"
            ],
            tags: [],
            costForTwo: 27500,
            costForTwoString: "₹275 FOR TWO",
            deliveryTime: 25,
            minDeliveryTime: 25,
            maxDeliveryTime: 25,
            slaString: "25 MINS",
            lastMileTravel: 0.4000000059604645,
            slugs: {
                restaurant: "aman-vegetarian-paltan-bazar-near-railway-station-hathibarkala",
                city: "dehradun"
            },
            cityState: "22",
            address: "Darshini Gate, Jhanda Mohalla, Paltan Bazaar,near railway station Dehradun",
            locality: "Paltan Bazaar Road",
            parentId: 13687,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "0.4 kms",
            hasSurge: false,
            sla: {
                restaurantId: "69769",
                deliveryTime: 25,
                minDeliveryTime: 25,
                maxDeliveryTime: 25,
                lastMileTravel: 0.4000000059604645,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "3.9",
            totalRatings: 5000,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "309458",
            name: "NEW  PUNJABI  ANGEETHI",
            uuid: "c483c334-ca1e-4e2d-9dfb-fba69c27ccb5",
            city: "22",
            area: "Race Course",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "oc4ft9q6fpsdkrvb25sz",
            cuisines: [
                "Chinese",
                "Indian"
            ],
            tags: [],
            costForTwo: 10000,
            costForTwoString: "₹100 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 31,
            maxDeliveryTime: 31,
            slaString: "31 MINS",
            lastMileTravel: 2.799999952316284,
            slugs: {
                restaurant: "new-punjabi-angeethi-dharampur-dharampur",
                city: "dehradun"
            },
            cityState: "22",
            address: "B Block, Race Course, Dehradun.",
            locality: "B Block",
            parentId: 14728,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "60% off",
                shortDescriptionList: [
                    {
                        meta: "60% off | Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "60% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "60% off up to ₹120 | Use code TRYNEW",
                        discountType: "Percentage",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            ribbon: [
                {
                    type: "PROMOTED"
                }
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "cid=6083725~p=4~eid=00000186-bc41-630b-00bf-bc9b00810415",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "2.7 kms",
            hasSurge: false,
            sla: {
                restaurantId: "309458",
                deliveryTime: 31,
                minDeliveryTime: 31,
                maxDeliveryTime: 31,
                lastMileTravel: 2.799999952316284,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: true,
            avgRating: "3.8",
            totalRatings: 1000,
            new: false
        },
        subtype: "basic"
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "586794",
            name: "New Paradise Bakers",
            uuid: "847acaf3-2e9b-4763-8461-b05f82db8af6",
            city: "22",
            area: "Chukkuwala",
            totalRatingsString: "50+ ratings",
            cloudinaryImageId: "473ad54c71b416ae36fd0f62a2519e51",
            cuisines: [
                "Bakery",
                "Desserts",
                "Snacks"
            ],
            tags: [],
            costForTwo: 10000,
            costForTwoString: "₹100 FOR TWO",
            deliveryTime: 22,
            minDeliveryTime: 22,
            maxDeliveryTime: 22,
            slaString: "22 MINS",
            lastMileTravel: 0.20000000298023224,
            slugs: {
                restaurant: "new-paradise-bakers-chukkuwala-chukkuwala",
                city: "dehradun"
            },
            cityState: "22",
            address: "12 Darshani Gate Dehradun, Dehradun Nagar Nigam, Dehradun, Uttarakhand - 248001",
            locality: "Gandhi Road",
            parentId: 351098,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "FREE DELIVERY",
                shortDescriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            aggregatedDiscountInfoV2: {
                header: "",
                shortDescriptionList: [
                    {
                        meta: "Free Delivery",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                descriptionList: [
                    {
                        meta: "FREE DELIVERY",
                        discountType: "FREE_DELIVERY",
                        operationType: "RESTAURANT"
                    }
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: ""
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: ""
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: ""
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: []
            },
            lastMileTravelString: "0.2 kms",
            hasSurge: false,
            sla: {
                restaurantId: "586794",
                deliveryTime: 22,
                minDeliveryTime: 22,
                maxDeliveryTime: 22,
                lastMileTravel: 0.20000000298023224,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "NOT_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY"
            },
            promoted: false,
            avgRating: "4.0",
            totalRatings: 50,
            new: false
        },
        subtype: "basic"
    },
];

//,join("") we use to separate items in an array
// "?" is a optional chaining in JS
//const RestaurantCard = (props) => {} ===> const RestaurantCard = ({restaurant}) => {}
//-this is known as destructuring.
//We can even destructure restaurant also

const RestaurantCard = ({
    name, cuisines, cloudinaryImageId, totalRatingsString}) => {
    return (
    <div className="card">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId
        } />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{totalRatingsString} stars</h4>
    </div>
    );
};

const Body = () => {
    return (
        //now we have passed the data i.e. restaurant = {restaurantList[0]} and many
        // restaurant = {restaurantList[0]}--> props
        //<RestaurantCard {...restaurantList[0].data}/> ==> using spread operator
        <div className="restaurant-list">
            <RestaurantCard {...restaurantList[0].data}/>
            <RestaurantCard {...restaurantList[1].data}/>
            <RestaurantCard {...restaurantList[2].data}/>
            <RestaurantCard {...restaurantList[3].data}/>
            <RestaurantCard {...restaurantList[4].data}/>
            
        </div>
    
    );
};

const Footer = () => {
    return (
        <h5>footer</h5>
    );
}

const AppLayout = () => {
    return (
        <>
        <Header />
        <Body />
        <Footer />
        </>
    );
};




const root = ReactDOM.createRoot(document.getElementById("root"));  

root.render(<AppLayout />);   //This is how we render functional component