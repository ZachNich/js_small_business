import dom from './main_dom.js'
import data from './main_data.js'

data.getEmployees()
    .then(array => array.forEach(employee => dom.displayEmployee(employee)))