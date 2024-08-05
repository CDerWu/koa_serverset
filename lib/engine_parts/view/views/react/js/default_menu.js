import { get } from '@react/js/httpreq';

let defaultMenu = [
    {
        title: "menu.default_title",
        key: "DefaultSetting",
        info: "預設列表",
        data: {
            accessPermission: true
        },
        expand: false,
        child: [
            {
                title: "menu.default_page",
                key: "DefaultPage",
                info: "預設頁面",
                data: {
                    accessPermission: true
                }
            }
        ]
    }
];

export const getMenuInfo = async () => {
    //const response = await get("/menulink/menu");
    //return response;
    
    return defaultMenu;
};

export default { getMenuInfo };