
import { emit, EventType } from '@react/js/event'

export function httpPost(url, data, callback, error, headers) {
    emit(EventType.LOADING, { loading: true })
    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        timeout: 30000,
        dataType: 'json',
        success: (res) => {
            if (callback)
                callback(res);
            emit(EventType.LOADING, { loading: false })
        },
        error: (e) => {
            if (error)
                error(e);
            emit(EventType.LOADING, { loading: false })
        },
        headers: headers
    });
}

export function httpGet(url, data, callback, error, headers) {
    emit(EventType.LOADING, { loading: true })
    return $.ajax({
        type: 'GET',
        url: url,
        data: data,
        timeout: 30000,
        dataType: 'json',
        success: (res) => {
            if (callback)
                callback(res);
            emit(EventType.LOADING, { loading: false })
        },
        error: (e) => {
            if (error)
                error(e);
            emit(EventType.LOADING, { loading: false })
        },
        headers: headers
    });
}

export async function post(url, data, extrInfo = {}) {
    return await sendToServer(url, data, { ...extrInfo, type: 'POST' });
}

export async function get(url, data, extrInfo = {}) {
    return await sendToServer(url, data, { ...extrInfo, type: 'GET' });
}

async function sendToServer(url, data, extrInfo = {}) {
    try {
        emit(EventType.LOADING, { loading: true })
        let res = await $.ajax({
            ...extrInfo,
            url: url,
            data: data,
            timeout: 30000,
            dataType: 'json',
        });
        emit(EventType.LOADING, { loading: false })
        return res;
    }
    catch (err) {
        emit(EventType.LOADING, { loading: false })
        alert("Error Send Post Url:" + url + ",Error:" + (typeof err === 'object' ? JSON.stringify(err) : err));
    }
}
