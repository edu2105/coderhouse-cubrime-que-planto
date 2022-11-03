const initialNavOptions = [
    {
        title: "cargando categorias...",
        id: 0,
        route: "",
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

const initialOrder = {
        name: "",
        surname: "",
        email: "",
        address: "",
        cardPayment: "",
        cardDetails: {number: ""},
        date: new Date(),
        items: [{price: "", quantity: "", title: ""}],
        totalPrice: ""
};

module.exports = {initialNavOptions, initialProducts, initialOrder};