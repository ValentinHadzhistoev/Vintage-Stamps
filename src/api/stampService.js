import { get, post, put, del } from './requester.js';
import { baseStampsUrl } from '../constants.js';

async function getAll() {
    return await get(`${baseStampsUrl}?sortBy=_createdOn%20desc`);
}

async function getById(stampId) {
    return await get(`${baseStampsUrl}/${stampId}`);
}

async function create(stampData) {
    const { 'imageUrl': imageUrl, ...otherData } = stampData;
    return await post(baseStampsUrl, { imageUrl, ...otherData });
}

async function update(stampId, stampData) {
    const { 'imageUrl': imageUrl, ...otherData } = showData;
    return await put(`${baseStampsUrl}/${stampId}`, { imageUrl, ...otherData });
}

async function deleteById(stampId) {
    await del(`${baseStampsUrl}/${stampId}`);
}

const stampsService = { getAll, getById, create, update, deleteById };
export default stampsService;