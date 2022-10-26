const navOptions = [
    {
        title: "Inicio",
        id: 0,
        isDropDown: false,
        route: "/",
    },
    {
        title: "De Interior",
        id: 1,
        isDropDown: false,
        route: "/categoria/interior"
    },
    {
        title: "De Exterior",
        id: 2,
        isDropDown: false,
        route: "/categoria/exterior"
    },
    {
        title: "Bonsáis",
        id: 3,
        isDropDown: false,
        route: "/categoria/bonsai"
    }
];

const initialProducts = [{
    id: 1,
    title: "",
    description: "",
    pictureUrl: "",
    pricing: {
            currency: "",
            netAmount: 0,
            discountPercentage: 0
    },
    caring: {
            watering: "",
            type: ""
    }
}, {
    id: 2,
    title: "",
    description: "",
    pictureUrl: "",
    pricing: {
            currency: "",
            netAmount: 0,
            discountPercentage: 0
    },
    caring: {
            watering: "",
            type: ""
    }
}, {
    id: 3,
    title: "",
    description: "",
    pictureUrl: "",
    pricing: {
            currency: "",
            netAmount: 0,
            discountPercentage: 0
    },
    caring: {
            watering: "",
            type: ""
    }
}, {
    id: 4,
    title: "",
    description: "",
    pictureUrl: "",
    pricing: {
            currency: "",
            netAmount: 0,
            discountPercentage: 0
    },
    caring: {
            watering: "",
            type: ""
    }
}, {
    id: 5,
    title: "",
    description: "",
    pictureUrl: "",
    pricing: {
            currency: "",
            netAmount: 0,
            discountPercentage: 0
    },
    caring: {
            watering: "",
            type: ""
    }
}, {
    id: 6,
    title: "",
    description: "",
    pictureUrl: "",
    pricing: {
            currency: "",
            netAmount: 0,
            discountPercentage: 0
    },
    caring: {
            watering: "",
            type: ""
    }
}, {
    id: 7,
    title: "",
    description: "",
    pictureUrl: "",
    pricing: {
            currency: "",
            netAmount: 0,
            discountPercentage: 0
    },
    caring: {
            watering: "",
            type: ""
    }
}, {
    id: 8,
    title: "",
    description: "",
    pictureUrl: "",
    pricing: {
            currency: "",
            netAmount: 0,
            discountPercentage: 0
    },
    caring: {
            watering: "",
            type: ""
    }
}];


module.exports = {navOptions, initialProducts};