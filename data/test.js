var payload ={start: 1709251200000, end: 1711843200000, noticeIds: [99255]}
fetch('https://privacy.evidon.com/report/api/report/consent/user/',{method:'POST',headers:{'Content-Type':'Application/json'},body:JSON.stringify(payload)})
.then((response) => response.text())
.then((data) => {
    fetch('http://localhost:3400/data/collection',{method:'post',headers:{'Content-Type':'application/json'},body:data})
})