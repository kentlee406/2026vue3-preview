# Vue課前試煉(Open Book)

如果看完前二堂的課前影音，可嘗試自己完成以下內容：

一、建立Vite專案(Vue 3+JavaScript)，專案名稱為2026vue3-preview，需將專案清空。

二、串接[API](https://hexschool.github.io/hexschoolliveswagger/)，建立串接API相關環境變數，並在 `src/api/axios.js` 集中建立 axios 實例與 API 函式，並串接[客戶購物 - 產品](<https://hexschool.github.io/hexschoolliveswagger/#/%E7%94%A2%E5%93%81%E7%9B%B8%E9%97%9C(%E5%AE%A2%E6%88%B6)/get_api_livejs_v1_customer__api_path__products>)API

三、在App.vue，以li標籤印出每個產品資料，並計算每個產品的折扣率 = 特價/原價\*100% (取小數點一位)，印出的格式為：

> 產品類別：xxx，產品名稱：xxx，特價：???，折扣率：??.?%

四、新增下拉式選單，其選項包括：全部、床架、收納、窗簾，預設顯示全部產品。當使用者點選任一選項時，篩選屬於該類別的所有產品。

五、部署至Github Pages

結果：[Github Pages](https://kentlee406.github.io/2026vue3-preview/)

答案：請見此Repo，本專案根據上述題號commit，可以依據題號倒回去看程式碼。
