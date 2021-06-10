module.exports = {
  lintOnSave: false,
  devServer: {
    host: "localhost", port: "8082",
    headers:{
      "Access-Control-Allow-Origin": "*"
    },
    proxy: 'https://cors-proxy.htmldriven.com/?url=/'


    }


}
