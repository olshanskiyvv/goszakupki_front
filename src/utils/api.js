import client from "./client";

import fileDownload from 'js-file-download';

export const getOrganizations =
    async () => {
  return await (await client.get('/organization/all')).data
}

export const getPositions =
    async () => {
  return await (await client.get('/position/all')).data
}

export const getPurchases =
    async () => {
  return await (await client.get('/purchase/all')).data
}

export const downloadReport = async (reportType, purchaseId, purchaseNumber) => {
    try {
      const response = await client.get(`/doc/${reportType}/${purchaseId}`, {
        params: { 
          user_id: JSON.parse(localStorage.getItem('user')).id 
        },
        responseType: 'blob',
      });
      fileDownload(response.data, `${reportType}__${purchaseNumber}.xlsx`);
    } catch (error) {
      console.error('Ошибка при скачивании файла:', error);
    }
  };

export const downloadDoc =
    async ({path, filename}) => {
  await client
      .get(
          '/document/get/' + path,
          {headers: {Authorization: 'Bearer '}})
      .then(({data}) => fileDownload(data, filename))
      .catch(e => console.log(e))
}

export const linkTelegram = async (telegramId, userId) => {
  await client.post('/user/telegram', {user: userId, telegramId: telegramId})
      .catch(e => console.log(e))
}