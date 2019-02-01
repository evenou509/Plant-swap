import axios from "axios";
const BASEURL = "http://harvesthelper.herokuapp.com/api/v1/plants?";
const APIKEY = "api_key=9bbe0cb9fc09ec115e66e1a2908a4d9e";

export default {
  search: function() {
    return axios.get(BASEURL + APIKEY);
  }
};


