'use strict';

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    //
    //Also still need the old instance types JSON
    if (request.ec2) {
        var url = "https://a0.p.awsstatic.com/pricing/1.0/ec2/region/us-east-1/ondemand/suse/index.json";

        fetch(url)
            .then(function (response) {
                response.json().then(data => sendResponse(data));
            })
            .catch(function (err) {
                console.log(err);
            });
    } else if (request.ebs) {
        var url = "https://a0.p.awsstatic.com/pricing/1.0/ec2/region/us-east-1/ebs/index.json";

        fetch(url)
            .then(function (response) {
                response.json().then(data => sendResponse(data));
            })
            .catch(function (err) {
                console.log(err);
            });
    } else if (request.ec2Deprecated) {
        var url = "https://a0.p.awsstatic.com/pricing/1.0/ec2/region/us-east-1/previous-generation/ondemand/linux/index.json";

        fetch(url)
            .then(function (response) {
                response.json().then(data => sendResponse(data));
            })
            .catch(function (err) {
                console.log(err);
            });
    }
  return true;
});