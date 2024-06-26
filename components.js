// 定义弹窗组件
Vue.component('popup', {
    props: ['popup'],
    template: `
        <div class="popup">
            <div class="popup-header">
                <h2>{{ popup.title }}</h2>
                <span class="close-btn" @click="$emit('close')">✖</span>
            </div>
            <div class="popup-content">
                <p>{{ popup.content }}</p>
            </div>
        </div>
    `
});
