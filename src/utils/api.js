import fileDownload from 'js-file-download';

import client from './client';

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

const downloadFile = async (path, params, filename) => {
  try {
    const response = await client.get(path, {
      params: params,
      responseType: 'blob',
    });
    fileDownload(response.data, filename);
  } catch (error) {
    console.error('Ошибка при скачивании файла:', error);
  }
};

export const downloadProxy = async (user_id) => {
	const path = `/doc/xml/user/${user_id}`;
	const filename = `Доверенность пользователя ${user_id}.xml`;
	await downloadFile(path, {}, filename);
};
export const downloadJustification = async (purchaseId, purchaseNumber) => {
  const path = `/doc/word/price_justification/${purchaseId}`;
  const filename = `Обоснование потребности в закупке ${purchaseNumber}.docx`;
  await downloadFile(path, {}, filename);
};
export const downloadNotification = async (purchaseId, purchaseNumber) => {
  const path = `/doc/word/notification/${purchaseId}`;
  const filename = `Извещение о закупке ${purchaseNumber}.docx`;
  await downloadFile(path, {}, filename);
};

export const downloadReport =
    async (reportType, purchaseId, purchaseNumber) => {
  const path = `/doc/word/${reportType}/${purchaseId}`;
  const params = {user_id: JSON.parse(localStorage.getItem('user')).id};
  const filename = `${reportType}__${purchaseNumber}.xlsx`;
  await downloadFile(path, params, filename);
};

export const downloadDoc =
    async ({path, filename}) => {
  await client
      .get('/document/get/' + path, {headers: {Authorization: 'Bearer '}})
      .then(({data}) => fileDownload(data, filename))
      .catch(e => console.log(e))
}

export const linkTelegram =
    async (telegramId, userId) => {
  await client.post('/user/telegram', {user: userId, telegramId: telegramId})
      .then(r => {
        const user = JSON.parse(localStorage.getItem('user'));
        user.telegramId = telegramId;
        localStorage.setItem('user', JSON.stringify(user));
      })
      .catch(e => console.log(e))
}

export const subTelegram = async (userId, categoryId, isActive) => {
  console.log(userId, categoryId, isActive);

  const resp = await client
                   .post(
                       '/user/subscriptions/' + (isActive ? 'remove' : 'add'),
                       {user: userId, lotCategoryId: categoryId})
                   .catch(e => console.log(e));
  return resp.data;
}
