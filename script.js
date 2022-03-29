'use strict';

const fs = require('fs');

function _getResult() {

    let result = {
        'auth_module':
        {
            'authn.provider_1': [],
            'authn.provider_2': [],
            'authn.provider_3': [],
            'authn.provider_4': []
        },
        'content_module':
        {
            'authz.provider_1': [],
            'authz.provider_2': [],
            'authz.provider_3': [],
            'authz.provider_4': []
        }
    }

    for (let count = 0; count <= 19; count++) {
        let fileName = `u${count}.json`;
        let data = fs.readFileSync(`./config/${fileName}`);
        data = JSON.parse(data);
        switch (data.provider.content_module) {
            case 'authz.provider_1': result.content_module['authz.provider_1'].push(fileName); break;
            case 'authz.provider_2': result.content_module['authz.provider_2'].push(fileName); break;
            case 'authz.provider_3': result.content_module['authz.provider_3'].push(fileName); break;
            case 'authz.provider_4': result.content_module['authz.provider_4'].push(fileName); break;
        }
        switch (data.provider.auth_module) {
            case 'authn.provider_1': result.auth_module['authn.provider_1'].push(fileName); break;
            case 'authn.provider_2': result.auth_module['authn.provider_2'].push(fileName); break;
            case 'authn.provider_3': result.auth_module['authn.provider_3'].push(fileName); break;
            case 'authn.provider_4': result.auth_module['authn.provider_4'].push(fileName); break;
        }
    }
    console.log(result);
    return result;
}
_getResult();

exports._getResult = _getResult;