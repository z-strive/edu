import * as XLSX from 'xlsx' 
export function exportElcel(fileName,data){
    let exl = XLSX.utils.book_new(); //初始化一个excel文件
    let exc_data = XLSX.utils.aoa_to_sheet(data); //为excel传入数据
    XLSX.utils.book_append_sheet(exl,exc_data,fileName); //将文档插入文件并定义命名
    XLSX.writeFile(exl,fileName+'xlsl')
}