let catalog = [
    {
        "title" : "Orange",
        "category" : "fruit",
        "price" : 12.99,
        "image" : "somewhere",
        "_id" : 1
    },

    {
        "title" : "apple",
        "category" : "fruit",
        "price" : 14.99,
        "image" : "somewhere",
        "_id" : 2
    },

    {
        "title" : "berries",
        "category" : "fruit",
        "price" : 16.99,
        "image" : "somewhere",
        "_id" : 3
    },

    {
        "title" : "banana",
        "category" : "fruit",
        "price" : 17.99,
        "image" : "somewhere",
        "_id" : 4
    },
    {
        "title" : "cherries",
        "category" : "fruit",
        "price" : 18.99,
        "image" : "somewhere",
        "_id" : 5
    },
    {
        "title" : "prune",
        "category" : "fruit",
        "price" : 19.99,
        "image" : "somewhere",
        "_id" : 6
    },
    {
        "title" : "peach",
        "category" : "fruit",
        "price" : 11.99,
        "image" : "somewhere",
        "_id" : 7
    },
    {
        "title" : "mustard",
        "category" : "fruit",
        "price" : 10.99,
        "image" : "somewhere",
        "_id" : 8
    },
]

class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;