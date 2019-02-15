var axios = require('axios')

module.exports = {
    getProductWeight: async function (productId) {
        const ctx= "product-service.js:getProductWeight";
        let URL = process.env.MICROS_PRODUCTS_URL
            || 'mycluster.icp:8899/products';
        let URI= `https://${URL}/${productId}`;
        console.log(ctx+": Calling "+URI);
        return axios
            .get(URI)
            .then(response => {
                if (response.data) {
                    console.log(ctx+": Got "+JSON.stringify(response.data));
                    var w= response.data.weightLB;
                    if ( ! Number.isNaN(parseFloat(w))) {
                        return w;
                    }
                }
                return Promise.reject('Invalid response object:'+
                                      JSON.stringify(response.data) );
            })
            .catch( (err) => {
                throw new Error(err)
            })
                }
}
