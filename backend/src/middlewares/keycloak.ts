import KcAdminClient from 'keycloak-admin';

const kcAdminClient = new KcAdminClient();

kcAdminClient.auth({
    username: 'admin',
    password: 'admin',
    grantType: 'password',
    clientId: 'express-api'
});


kcAdminClient.setConfig({
    realmName: 'ecommserse',
});