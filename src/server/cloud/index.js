Parse.Cloud.define('hello', function(req, res) {
    return 'Hi';
});

//update users counter
Parse.Cloud.afterSave('_User', (req, res) => {
    var UsersCount = Parse.Object.extend('UsersCount')
    var query = new Parse.Query(UsersCount)
    query.first()
    .then(total => {
        total.increment("count")
        total.save()
    })
})
Parse.Cloud.afterDelete('_User', (req, res) => {
    var UsersCount = Parse.Object.extend('UsersCount')
    var query = new Parse.Query(UsersCount)
    query.first()
    .then(total => {
        total.decrement("count")
        total.save()
    })
})
//update products counter
Parse.Cloud.afterSave('Product', (req, res) => {
    var ProductsCount = Parse.Object.extend('ProductsCount')
    var query = new Parse.Query(ProductsCount)
    query.first()
    .then(total => {
        total.increment("count")
        total.save()
    })
})
Parse.Cloud.afterDelete('Product', (req, res) => {
    var ProductsCount = Parse.Object.extend('ProductsCount')
    var query = new Parse.Query(ProductsCount)
    query.first()
    .then(total => {
        total.decrement("count")
        total.save()
    })
})
