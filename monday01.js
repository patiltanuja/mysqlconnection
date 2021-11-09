var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=1998&month=december';
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);//8080
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);
console.log(qdata.year);
