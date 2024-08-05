import './index.scss';
import Menu from './menu';
import MenuGroup from './menugroup';
import MenuItem from './menuitem';

Menu.Group = MenuGroup;
Menu.Item = MenuItem;

export default Menu;

//使用方法

// import Menu from '@components/menu';
{/* 
<Menu>
    <Menu.Group
        title={'主標題一'}
        menuKey='g1'>
        <Menu.Item menuKey='g1_1'>標題一的子項目一</Menu.Item>
        <Menu.Item menuKey='g1_2'>標題一的子項目二</Menu.Item>
        <Menu.Group
            title={'標題一的子標題一'}
            menuKey='g11'>
            <Menu.Item customData={{ 'routers': '/info/' }} menuKey='g11_1'>子標題一的項目一</Menu.Item>
            <Menu.Item menuKey='g11_2'>子標題一的項目二</Menu.Item>
        </Menu.Group>
    </Menu.Group>
    <Menu.Group
        title={'主標題二'}
        menuKey='g2'>
        <Menu.Item menuKey='g2_1'>標題二的子項目一</Menu.Item>
        <Menu.Item menuKey='g2_2'>標題二的子項目二</Menu.Item>
    </Menu.Group>
</Menu> 
*/}




//Menu props
	// className: PropTypes.string, //自定義classname
    // onSelect: PropTypes.func,    //當選項被選擇時候  function({ menuState, data })
    // selectKey: PropTypes.string, //預設選中的key
    // expandArr: PropTypes.array,  //展開的key
    // expandChange: PropTypes.func, //展開陣列可由外部傳入 故改變縮放狀態時通知外部 以免狀態不統一
    // autoControl: PropTypes.bool,  //是否由Menu內部自動控制State


//Menu.Group props
    // title: PropTypes.any,	//顯示的名稱
    // menuKey: PropTypes.string,  //唯一的key
    // customData: PropTypes.object,   //可自定義data 在onSelect時回傳

//Menu.Item props
	// menuKey: PropTypes.string,      //唯一的key
	// customData: PropTypes.object,   //可自定義data 在onSelect時回傳