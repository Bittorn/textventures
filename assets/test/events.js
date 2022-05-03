export default {
    "events" : [
        {
            "id" : 1,
            "name" : "The First Event",
            "text" : "Some event details here",
            "options" : [
                {
                    "text" : "Go to 2",
                    "destination" : 2
                },
                {
                    "text" : "Go to 3",
                    "destination" : 3
                }
            ]
            
        },
        {
            "id" : 2,
            "name" : "The Second Event",
            "text" : "Some more event details here",
            "options" : [
                {
                    "text" : "Return",
                    "destination" : 1
                }
            ]
        },
        {
            "id" : 3,
            "name" : "The Third Event",
            "text" : "Some more more event details here",
            "options" : [
                {
                    "text" : "Return",
                    "destination" : 1
                }
            ]
        }
    ]
}