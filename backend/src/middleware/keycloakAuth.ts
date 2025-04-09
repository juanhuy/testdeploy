import { keycloak } from '../config/keycloak';


export const protect = () => keycloak.protect();


export const protectAdmin = () => keycloak.protect('realm:admin');
