let catalog = [
    {
        "title" : "Addition Board",
        "category" : "Boards",
        "price" : 12.99,
        "image" : "addboard.jpg",
        "_id" : 1
    },

    {
        "title" : "Post-it Note Holder",
        "category" : "Other",
        "price" : 14.99,
        "image" : "postit.jpeg",
        "_id" : 2
    },

    {
        "title" : "ABC Flash Cards",
        "category" : "Other",
        "price" : 16.99,
        "image" : "abcflashcard.jpg",
        "_id" : 3
    },

    {
        "title" : "ABC Puzzle",
        "category" : "Boards",
        "price" : 17.99,
        "image" : "abcpuz.jpg",
        "_id" : 4
    },
    {
        "title" : "Book Earrings",
        "category" : "Earrings",
        "price" : 18.99,
        "image" : "bookear.JPG",
        "_id" : 5
    },
    {
        "title" : "Ghost Earrings",
        "category" : "Earrings",
        "price" : 19.99,
        "image" : "ghostear.JPG",
        "_id" : 6
    },
    {
        "title" : "Multiplication Board",
        "category" : "Boards",
        "price" : 11.99,
        "image" : "mulboard.jpeg",
        "_id" : 7
    },
    {
        "title" : "Skeleton Earrings",
        "category" : "Earrings",
        "price" : 10.99,
        "image" : "skelear.JPG",
        "_id" : 8
    },
]

class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;