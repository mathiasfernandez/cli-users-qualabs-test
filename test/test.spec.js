var expect = require('chai').expect;
script = require('../script.js');

describe('Testing', function () {

    describe('authn.provider', function () {    
        it('check auth_module provider', function () {  
            let result = script._getResult(); 
            expect(result.auth_module['authn.provider_1']).to.deep.equal([ 'u3.json', 'u4.json', 'u17.json', 'u19.json'])
            expect(result.auth_module['authn.provider_2']).to.deep.equal([ 'u1.json',  'u6.json', 'u8.json',  'u10.json', 'u13.json', 'u14.json','u16.json', 'u18.json'])
            expect(result.auth_module['authn.provider_3']).to.deep.equal([ 'u0.json', 'u7.json', 'u11.json', 'u12.json', 'u15.json' ]);
            expect(result.auth_module['authn.provider_4']).to.deep.equal([ 'u2.json', 'u5.json', 'u9.json' ]);
        });
    });

    describe('authz.provider', function () {
        it('check content_module provider', function () {
            let result = script._getResult(); 
            expect(result.content_module['authz.provider_1']).to.deep.equal(['u4.json', 'u14.json'])
            expect(result.content_module['authz.provider_2']).to.deep.equal(['u8.json','u9.json', 'u13.json','u15.json','u16.json','u17.json'])
            expect(result.content_module['authz.provider_3']).to.deep.equal(['u2.json','u3.json','u5.json','u10.json', 'u11.json',  'u18.json'])
            expect(result.content_module['authz.provider_4']).to.deep.equal(['u0.json','u1.json','u6.json','u7.json', 'u12.json', 'u19.json'])
        });
    });
});