function myAjax(url, type, data) {
    let result = null;
    $.ajax({
        url: "http://localhost:8082" + url,
        type: type,
        data: data,
        dataType: 'json',
        async: false,
        xhrFields: {
            withCredentials: true //允许跨域带Cookie
        },
        success: function (data) {
            result = data;
        }
    });
    return result;
}

function imgMyAjax(url, type, data) {
    let result = null;
    $.ajax({
        url: "http://localhost:8082" + url,
        type: type,
        data: data,
        async: false,
        xhrFields: {
            withCredentials: true //允许跨域带Cookie
        },
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function (data) {//data后台传递到前台的数据
            result = data;
        }
    });
    return result;
}