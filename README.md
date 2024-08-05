#

# 這是以KOA作為基礎框架的Server模組
這個框架推薦使用**單方案多專案**的形式建立一系列的server體系

所以不支援單專案多server的結構模式

**另外目前已經支援使用typescript 請多加利用**

建立server時需要以下步驟

# 1.首先建立NODE.js空專案 或是直接開啟一個空的資料夾
**你要不要多開一層資料夾...?**

**如果你有方案和專案的概念的話應該知道我在說什麼吧XD**

# 2.在該位置執行下面指令
可以在該資料夾位置 從資料夾路徑列輸入 **"cmd ."**

download modules
```
npm install https://github.com/CDerWu/koa_serverset.git
```

# 3.真正建立專案
create project
```
.\node_modules\koa_serverset\createproject.bat
```
**注意 本指令會無條件覆蓋 專案建立完成後請勿再次執行**

# -----以上執行完畢之後 serve就建立完成摟-----



# ------------- 以下是小工具說明 ------------

# 引擎工具箱
本server框架提供引擎工具箱 方便開發者加入或移除引擎所提供的模組

專案內會有 **engine_parts** 資料夾 這個資料夾提供各模組install及uninstall的bat

如果日後工具箱有更新的話 請更新本模組 並執行下面指令
```
.\node_modules\koa_serverset\copytemplate.bat
```

## install
install之後會直接在專案內部署所需的基本功能

若需要客製化的部分 你可以在\script\enginesetting找到該檔案

## uninstall
uninstall之後會將模組及部屬在專案的檔案拔除

# 如果你有方案層的規劃...
如果你有方案層的規劃 這邊有提供一些方案用的小工具
```
.\node_modules\koa_serverset\copyprojectlayer.bat
```