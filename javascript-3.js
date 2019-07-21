
const http = require('http')
const request = require('request')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
 res.statusCode = 200
 res.setHeader('Content-Type', 'text/plain')
 setTimeout(()=>{res.end('---- Hello, Otus! ------\n'); }, 3000);
})

server.listen(port, hostname, () => {
	 console.log(`Server running at http://${hostname}:${port}/`)
})
 




function send_request() {
  return new Promise((resolve) => {
   	request(`http://${hostname}:${port}/`, (err, res, body) => {
			  if (err) { return console.log(err); }
			  console.log(body);
			  resolve();
	});
  });
}


function myRequest(n,typeRequest){
	var p = Promise.resolve();
	for (var i=0; i<n; i++) {
		if (typeRequest) {p = p.then(send_request);}
		else {send_request();}
	}
}


//ассинхронно
myRequest(4,true);

//синхронно
//myRequest(5,false);
