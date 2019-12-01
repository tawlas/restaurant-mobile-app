import axios from 'axios';



const yelp = axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer Ce_sM_VseizN0CeJ616wEv4k9eYtr0cCcUoa4xJ5vn7GmTIyyus35PYXhNTcqpoBEemg5iAG8lBFAMAXTJ_4MIm0hJ3HivJhJkROLLBsFGZHmt_vysfdGV7vh2fiXXYx'
    }
})

export default yelp