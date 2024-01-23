var members = [
    {
        imgSrc: "https://dwlab.github.io/images/林亭延.jpg",
        name: "林亭延",
        position: "112 博士生",
        description: "",
        socialLinks: [
            { icon: "icon-twitter", url: "mailto:tingyanlin.77@gmail.com" },
            { icon: "icon-facebook", url: "https://www.facebook.com/tingyan.lin.319" },
            { icon: "icon-github", url: "#" }
        ]
    },
    {
        imgSrc: "https://dwlab.github.io/images/person2.jpg",
        name: "陳柏翰",
        position: "104 碩士生",
        description: "異質系統上協同漸增式貢獻度管理模型",
        socialLinks: [
            { icon: "icon-twitter", url: "#" },
            { icon: "icon-facebook", url: "#" },
            { icon: "icon-github", url: "#" }
        ]
    },
    {
        imgSrc: "https://dwlab.github.io/images/%e7%94%98%e8%b2%b4%e5%ae%87.jpg",
        name: "甘貴宇",
        position: "104 碩士生",
        description: "基於時序複合性災害資料之避難路徑規劃",
        socialLinks: [
            { icon: "icon-twitter", url: "#" },
            { icon: "icon-facebook", url: "#" },
            { icon: "icon-dribbble", url: "#" }
        ]
    }
];

// 將 members 變數暴露給其他文件
if (typeof module !== 'undefined' && module.exports) {
    module.exports = members;
}
