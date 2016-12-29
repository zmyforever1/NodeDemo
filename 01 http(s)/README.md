# http模块的使用

Node中内置了`http`模块，提供可HTTP服务器和客户端接口。

创建HTTP服务器要调用`http.createServer()`函数，后面更新后改为`http.Server()`函数。它只有一个参数，是个回调函数，服务器每次收到HTTP请求后都会调用这个回调函数。这个请求回调会收到两个参数，请求`request`和响应`response`对象，通常简写为`req`和`res`。

服务器每收到一条HTTP请求，就会用新的`req`和`res`对象触发请求回调函数。在触发回调函数之前，Node会解析请求的HTTP头，并将它们作为`req`对象的一部分提供给请求回调，但Node不会在回调函数被触发之前开始对请求体的解析。

Node不会自动往客户端写任何响应。在调用完请求回调函数之后，就要你负责用`res.end()`方法结束响应。这样在结束响应之前，可以在请求的生命周期内运行任何异步逻辑。如果没能结束响应，请求会挂起，直到客户端超时，或者它会一直处于打开状态。

## 01.js：搭建简单http服务器

说明：一个简单的http服务器，开启后访问localhost:9000。

## 02.js：搭建http服务器的另一种写法

这里用了`Server()`创建服务器，用`on('request')`来监听连接请求。

## 03.js：简单的重定向服务器

说明：通过返回302响应头临时重定向。

1.给客户发送302响应代码，告诉客户，资源已经临时移到另一个位置了；
2.发送一个位置头告诉客户重定向到哪里。

## 05.js：http处理请求

在默认情况下，`data`事件会提供`Buffer`对象，这是Node版的字节数组。而对于文本格式的待办事项而言，应该将流编码设置为ASCII或者UTF-8，这样`data`事件会给出字符串。这可以通过调用`req.setEncoding(encoding)`方法设定。

## 06.js：静态文件服务器

用`fs`模块结合流数据实现一个静态文件服务器，可以直接访问本地资源。

`fs.stat()`用于得到文件的相关信息。如果文件不存在，`fs.stat()`会在`err.code`中放入`ENOENT`作为响应，