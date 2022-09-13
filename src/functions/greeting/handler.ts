import { successResponse } from './../../libs/api-gateway';
const greeting = async (event) => {

    return successResponse({
        message: 'Hello from SLS based Lambda'
    })
};

export const main = greeting;