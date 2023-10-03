//core module
const readline = require('readline');
const fs = require('fs');
const http = require('http');
const url = require('url');

//user define module
const replaceContainer = require('./modules/replaceHtml');
const user = require('./modules/user');
/* 
///////////////create interface and take user input///////////////
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter your name:', (name) => {
    console.log(`my name is ${name}`)
    rl.close(name);
});
rl.on('close',(name)=>{
console.log('interface closed');
process.exit(0)
})

//////////////////////////////read and write file synchronously////////////
const newText=fs.readFileSync('./files/newtext.txt','utf-8');
console.log(newText);
const text=`data read from newtext.text ${newText}.\n Date Created ${new Date()}`
const createNewtext=fs.writeFileSync('./files/readtext.text',text)

//////////////////////////////read and write file Asynchronously////////////////////////
fs.readFile('./files/newtext.txt', 'utf8', (error, data) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data)
        fs.readFile(`./files/${data}.txt`, 'utf8', (error1, data1) => {
            if (error1) {
                console.error(error1);
            } else {
                console.log(data1)
                fs.writeFile('./files/writeAsync.txt', `${data}\n${data1}\nDate created ${new Date()}`, (error2) => {
                    if (error2) {
                        console.error(error2);
                    } else {
                        console.log('file write successfully')
                    }
                })
            }
        })
    }
})
console.log('reading....')
*/
const readHome = fs.readFileSync('./template/index.html', 'utf-8')
const product = JSON.parse(fs.readFileSync('./files/form.json', 'utf-8'));
const producPage = fs.readFileSync('./template/product.html', 'utf-8')
const productDetails = fs.readFileSync('./template/product-details.html', 'utf-8');
// const server = http.createServer((request, response) => {
//     let { query, pathname: path } = url.parse(request.url, true)
//     switch (path.toLowerCase()) {
//         case '/':
//             response.writeHead(200, {
//                 'Content-type': 'text/html',
//                 'custom-header': 'test-test'
//             })
//             response.end(readHome.replace('{{pageContainent}}', 'You are in Home Page'));
//             break;
//         case '/home':
//             response.writeHead(200, {
//                 'Content-type': 'text/html',
//                 'custom-header': 'test-test'
//             })
//             response.end(readHome.replace('{{pageContainent}}', 'You are in Home Page'));
//             break;
//         case '/about':
//             response.writeHead(200, {
//                 'Content-type': 'text/html',
//                 'custom-header': 'test-test'
//             })
//             response.end(readHome.replace('{{pageContainent}}', 'You are in About Page'));
//             break;
//         case '/contact':
//             response.writeHead(200, {
//                 'Content-type': 'text/html',
//                 'custom-header': 'test-test'
//             })
//             response.end(readHome.replace('{{pageContainent}}', 'You are in Contact Page'));
//             break;
//         case '/products':
//             if (query.id) {
//                 let prod=product[query.id]
//                 let productHtmlArray=replaceContainer(productDetails,prod)

//                    let productResponseHtml = readHome.replace('{{pageContainent}}', productHtmlArray)
//                 response.end(productResponseHtml); 
//             }else if(query.buy){
//             response.end(readHome.replace('{{pageContainent}}', '<a style="margin-left: 566px;" href="/products">Back</a><br>this features is comming soon...'));

//             } else {
//                 let productHtmlArray=product.map((prod)=>{
//                     return replaceContainer(producPage,prod)
//                    })
//                 let productResponseHtml = readHome.replace('{{pageContainent}}', productHtmlArray.join(','))
//                 response.writeHead(200, { 'Content-type': 'text/html' })
//                 response.end(productResponseHtml);
//             }
//             break;
//         default:
//             response.writeHead(404, {
//                 'Content-type': 'text/html',
//                 'custom-header': 'test-test'
//             })
//             response.end(readHome.replace('{{pageContainent}}', 'Error 404:Page not found'));
//             break;
//     }
// })




const server = http.createServer();
server.listen(3000, '127.0.0.1', () => {
    console.log('server has started.')
})
    // server.on('request', (request, response) => {
    //     let { query, pathname: path } = url.parse(request.url, true)
    //     switch (path.toLowerCase()) {
    //         case '/':
    //             response.writeHead(200, {
    //                 'Content-type': 'text/html',
    //                 'custom-header': 'test-test'
    //             })
    //             response.end(readHome.replace('{{pageContainent}}', 'You are in Home Page'));
    //             break;
    //         case '/home':
    //             response.writeHead(200, {
    //                 'Content-type': 'text/html',
    //                 'custom-header': 'test-test'
    //             })
    //             response.end(readHome.replace('{{pageContainent}}', 'You are in Home Page'));
    //             break;
    //         case '/about':
    //             response.writeHead(200, {
    //                 'Content-type': 'text/html',
    //                 'custom-header': 'test-test'
    //             })
    //             response.end(readHome.replace('{{pageContainent}}', 'You are in About Page'));
    //             break;
    //         case '/contact':
    //             response.writeHead(200, {
    //                 'Content-type': 'text/html',
    //                 'custom-header': 'test-test'
    //             })
    //             response.end(readHome.replace('{{pageContainent}}', 'You are in Contact Page'));
    //             break;
    //         case '/products':
    //             if (query.id) {
    //                 let prod = product[query.id]
    //                 let productHtmlArray = replaceContainer(productDetails, prod)

    //                 let productResponseHtml = readHome.replace('{{pageContainent}}', productHtmlArray)
    //                 response.end(productResponseHtml);
    //             } else if (query.buy) {
    //                 response.end(readHome.replace('{{pageContainent}}', '<a style="margin-left: 566px;" href="/products">Back</a><br>this features is comming soon...'));

    //             } else {
    //                 let productHtmlArray = product.map((prod) => {
    //                     return replaceContainer(producPage, prod)
    //                 })
    //                 let productResponseHtml = readHome.replace('{{pageContainent}}', productHtmlArray.join(','))
    //                 response.writeHead(200, { 'Content-type': 'text/html' })
    //                 response.end(productResponseHtml);
    //             }
    //             break;
    //         default:
    //             response.writeHead(404, {
    //                 'Content-type': 'text/html',
    //                 'custom-header': 'test-test'
    //             })
    //             response.end(readHome.replace('{{pageContainent}}', 'Error 404:Page not found'));
    //             break;
    //     }
    // })

/* now the below is the event driven arcitecture.
*     |-----OBSERVER PATERN-------|
*Event|Emitter----->Event Listener|------->Event Handler 
*     |---------------------------|
*     evevt emitter->server
*     event listeener->on()
*      event handler->()=>{}
*/
/////coustom event handler////
    // let myEmmiter=new user();
    // myEmmiter.on('userCreated',(id,name)=>{
    //     console.log(`${name} is created with an id ${id}`)
    // })
    // myEmmiter.on('userCreated',(id,name)=>{
    //     console.log(`${name} is added to database with an id ${id}`)
    // })
    // myEmmiter.emit('userCreated',1,'sahabaz');

/////using readable and writeable stream/////
    // server.on('request',(req,res)=>{
    //     let rs=fs.createReadStream('./files/long-text.txt');
    //     rs.on('data',(chunk)=>{
    //         res.write(chunk);
    //     })
    //     rs.on('end',()=>{
    //         res.end();
    //     })
    //     rs.on('error',(error)=>{
    //         res.end(error.message);
    //     })
    // })

////////using pipe method////////
  server.on('request',(req,res)=>{
    let rs=fs.createReadStream('./files/long-text.txt');
    rs.pipe(res)
  })
  console.log('node start')
