const address = [
    {
        id: 1,
        name: "北京市",
        children: [
            { id: 11, name: "海淀区", children: [{ id: 111, name: "中关村" }] },
            { id: 12, name: "朝阳区" },
        ],
    },
    { id: 2, name: "河北省" },
];
function getNameById (address, id) {
    
}
getNameById(address, 2);  // 河北省 
getNameById(address, 111);  // 中关村 
getNameById(address, 32);  // ""