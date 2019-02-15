var productService = require('../services/product-service');

class ShippingController
{
    constructor() {
        this.prices= {
            standard: 0.1,
            overnight: 1
        };
    }

    async getItemShipping(item) {
        var shippingAmount =
            await productService.getProductWeight(item.id);
        return shippingAmount *
            this.prices[item.type];
    }
}

module.exports = ShippingController;
