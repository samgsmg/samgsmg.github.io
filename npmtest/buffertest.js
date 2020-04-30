var buf = new Buffer.alloc(256);
var len = buf.write("www.w3cschool.cn");
console.log("写入字节数:" + len);