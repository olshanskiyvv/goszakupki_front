import client from "./client";

export const getOrganizations = async () => {
    return await (await client.get('/organization/all')).data
}

export const getPositions = async () => {
    return await (await client.get('/position/all')).data
}