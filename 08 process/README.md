# process对象

process是一个Node中的全局对象，包含当前进程的相关信息，不如传给它的参数和当前设定的环境变量

## 01.js：在node退出前调用代码。

说明：此代码会在node退出循环前调用，时间循环在exit事件之后就不会再运行了，因此只有那些不需要回调的代码会被执行，这里的`setTimeout()`里的代码就不会被执行。

## 02.js：通过uncaughtException事假捕获异常

说明：在Node中，时间主循环里碰到的异常会导致Node进程退出。uncaughtException事件提供了一个极其暴力的方法来捕获这些异常。
uncaughtException是一个简单的智能处理程序，只能简答的把异常输出到标准输出，记录下这些错误。但是，因为它捕获的是一个不存在的函数触发事件，所以虽然Node程序不会退出，但是标准的执行流程会被打断。所以Node.js文档中明确指出，使用这个时间时应该在回调中包含`process.exit()`；否则会让程序处于不确定的状态中，这很糟糕。


## 03.js：设置和获取环境变量

环境变量对于改变程序或模块的工作方式很有帮助。比如用这些变量配置服务器，指定它监听的端口。或者操作设定TMPDIR变量指定程序应该把临时文件输出到哪个目录并在后面清理它们。

假如你想在开发或调试模块时启用调试模式的日志输出，但在常规使用时不用，因为那样用户会觉得很烦。用环境变量可以很好地解决这个问题。

>设置环境变量
>* win:set DEBUG=1;
>* linux:export DEBUG=1

## 04.js：获取命令参数

 `process.argv`会获取终端输入的命令并生成一个数组。数组中第一个是node程序地址，第二个是脚本文件地址，往后就是输入的命令参数。

 例如：

 ```javascript
 $ node 04.js hello world 
 //['.../node.exe','...\\NodeDemo\\08 process\\04','hello','world']
 ```