import * as SWComponent from '@components/main/pagecomponents.js';
import GroupPage from '@components/grouppage';
import DefaultPage from '@components/defaultpage';
import menuObject from '@react/js/default_menu';

async function getMenuData() {
    try {
        let menuData = await menuObject.getMenuInfo();
        return menuData;
    } catch (error) {
        console.error(error);
        return [];
    }
}

function getMenuKeyArray(menuData) {
    let keyData = {
        itemKeyArray: [],
        groupKeyArr: [],
    }

    let handleMenuKey = function (data) {
        if (data.child && data.child.length > 0) {
            keyData.groupKeyArr.push(data.key);
            for (let item of data.child) {
                handleMenuKey(item);
            }
        }
        else
            keyData.itemKeyArray.push(data.key);
    }

    for (let item of menuData) {
        handleMenuKey(item);
    }

    return keyData;
}


/**
 * 處理大標題進入同一頁面 
 */
function handleGroupPage(groupKeyArr) {
    let data = {};

    for (let groupKey of groupKeyArr) {
        data[groupKey] = {};
        data[groupKey].type = groupKey;
        data[groupKey].obj = GroupPage;
    }

    return data;
}

/**
 * 處理預設頁面
 */
function handleDefaultPage(itemKeyArr) {
    let data = {};

    for (let itemKey of itemKeyArr) {
        data[itemKey] = {};
        data[itemKey].type = itemKey;
        data[itemKey].obj = DefaultPage;
    }

    return data;
}


async function getSWComponent() {
    let data = {};
    for (let key in SWComponent) {
        data[key] = {};
        data[key].type = key;
        data[key].obj = SWComponent[key];
    }

    let menuData = await getMenuData();
    let menuKeyArray = getMenuKeyArray(menuData);

    return {
        ...handleDefaultPage(menuKeyArray.itemKeyArray),
        ...handleGroupPage(menuKeyArray.groupKeyArr),
        ...data
    };
}

export default getSWComponent;

//////////////////////Export format example
// {
//     "Home": { type: 'Home', obj: Home },
//     "Login": { type: 'Login', obj: Login },
//     "CreateAccount": { type: 'CreateAccount', obj: CreateAccount }
// }