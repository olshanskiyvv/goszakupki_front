import client from "./client";

import fileDownload from 'js-file-download';

export const getOrganizations = async () => {
    return await (await client.get('/organization/all')).data
}

export const getPositions = async () => {
    return await (await client.get('/position/all')).data
}

export const getPurchases = async () => {
    return await (await client.get('/purchase/all')).data
}

export const downloadReport = async (reportType, purchaseId, purchaseNumber) => {
    await client
      .get('/doc/' + reportType + '/' + purchaseId,
        {params: {user_id: JSON.parse(localStorage.getItem('user')).id}}
      )
      .then(({data}) => fileDownload(data, reportType + '__' + purchaseNumber + '.xlsx'))
      .catch(e => console.log(e))
}

export const downloadDoc =
    async ({path, filename}) => {
  await client
      .get(
          '/document/get/' + path,
          {headers: {Authorization: 'Bearer '}})
      .then(({data}) => fileDownload(data, filename))
      .catch(e => console.log(e))
}