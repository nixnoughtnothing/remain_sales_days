/*
* 今年の残り日数を計算
* @return 残日数
* TODO: 平日のみpickupできるようにする
*/
function getDay()
{   

    // 日付オブジェクトの作成  
    var today             = new Date(); 
    var year = today.getFullYear();
    var last_sales_day    = new Date(year + "-12-31");

    // 日数・年齢の計算
    var diff           = last_sales_day.getTime() - today.getTime();
    var daysPast       = Math.floor(diff / (1000 * 60 * 60 * 24));　// ÷(1000*60秒*60分*24h)でミリ秒を日に変換！

    // 結果の表示
    document.getElementById('remain_sales_days').innerHTML = daysPast;
}