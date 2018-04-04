export const preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};


export const getJSON = (url) => {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();

    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

//example:
getJSON("/posts.json").then((json) => {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});



// export const jsonp = (() => {
//   let count = 0
//   let body = document.body
//
//   const paramsToStr = (params) => {
//     let temp = []
//     for (let key in params) {
//       if (params.hasOwnProperty(key)) {
//         temp.push(`${key}=${params[key]}`)
//       }
//     }
//
//     return temp.join('&')
//   }
//
//   return (url, options, func) => {
//     if (typeof options === 'function') {
//       func = options
//       options = {}
//     }
//
//     let opts = {
//       callback: 'callback',
//       params: {}
//     }
//
//     const {callback, params} = Object.assign(opts, options)
//
//     const id = 'jsonp_' + count++ + Date.now()
//
//     params[callback] = id
//
//     url += (~url.indexOf('?') ? '&' : '?') + paramsToStr(params)
//
//     let script = document.createElement('script')
//
//     window[id] = data => {
//       func(data)
//       body.removeChild(script)
//       window[id] = null
//     }
//
//     script.src = url
//     body.appendChild(script)
//   }
// })()
