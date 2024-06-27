// 创建 Vue 实例
const app = new Vue({
    el: '#app',
    data: {
        imageUrl: '', // 上传图片预览地址
        textInput: '', // 文本输入框内容
        qrCode: null, // QRCode.js 实例
        showPopups: true, // 控制是否显示弹窗
        popups: [ // 弹窗内容数据
            { id: 1, title: '欢迎您！', content: '这是弹窗3' },
            { id: 2, title: '欢迎您！', content: '这是弹窗2' },
            { id: 3, title: '欢迎您！', content: '这是弹窗1' }
        ],
        postTitle: '你的文章标题',
        postContent: `
            这是你的文章内容。你可以在这里包括文本、图片和其他元素。
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br><br>
            <img src="https://via.placeholder.com/300x200" alt="占位符图片" class="centered-image">
            <br><br>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br><br>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br><br>
            <img src="https://via.placeholder.com/300x200" alt="占位符图片" class="centered-image">
            <br><br>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br><br>
            这是你的文章内容。你可以在这里包括文本、图片和其他元素。
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br><br>
            <img src="https://via.placeholder.com/300x200" alt="占位符图片" class="centered-image">
            <br><br>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br><br>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br><br>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        postImages: [],
    },
    methods: {
        // 关闭弹窗方法
        closePopup(id) {
            // 找到对应 id 的弹窗并关闭
            const index = this.popups.findIndex(popup => popup.id === id);
            if (index !== -1) {
                this.popups.splice(index, 1); // 移除弹窗
            }
        },
        // 点击预览框上传文件
        uploadFile() {
            document.getElementById('fileUpload').click();
        },

        // 预览上传的图片
        previewImage(event) {
            const file = event.target.files[0];
            this.imageUrl = URL.createObjectURL(file);
            this.clearQRCode();
        },

        // 从文本生成二维码
        generateQRCodeFromText() {
            if (this.textInput.trim() === '') {
                alert('请输入文本');
                return;
            }
            this.generateQRCode(this.textInput);
        },

        // 生成当前页面 URL 的二维码
        generateQRCodeFromURL() {
            const currentPageUrl = window.location.href;
            this.generateQRCode(currentPageUrl);
        },

        // 使用 QRCode.js 生成二维码
        generateQRCode(text) {
            this.clearQRCode(); // 清除旧的二维码
            const qrcodeElement = document.getElementById('qrcode');
            this.qrCode = new QRCode(qrcodeElement, {
                text: text,
                width: 256,
                height: 256,
            });
        },

        // 清除二维码
        clearQRCode() {
            const qrcodeElement = document.getElementById('qrcode');
            if (qrcodeElement) {
                qrcodeElement.innerHTML = ''; // 清空 div 内容
                this.qrCode = null; // 重置 QRCode.js 实例
            }
        },
    },
});
