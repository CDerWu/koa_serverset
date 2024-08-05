import { get } from '@react/js/httpreq';
import menuObject from '@react/js/default_menu';

export const getInitState = async function () {
    return {
        //...await getAuthorityType(),
        //...await getUserInfo(),
        ...await getMenuInfo()
    };
};

//取得權限列表
// async function getAuthorityType() {
//     const response = await get("/authority/self");
//     return {
//         SystemAuthorityType: response.type,
//     };
// }

//取得使用者資料
// async function getUserInfo() {
//     const response = await get("/user/self");
//     return {
//         user: response.user
//     };
// }

//取得Menu資料
async function getMenuInfo() {
    let response = await menuObject.getMenuInfo();
    return {
        menuData: response
    };
}

export default { getInitState };