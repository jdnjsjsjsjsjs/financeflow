document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('formValid', function(event) {
        const formData = event.detail;

        console.clear();

        console.log('%c Данные отправленной формы:', 'font-weight: bold;');
        console.log('=====================');
        console.log('👤 ФИО:', formData.fullname);
        console.log('📧 Email:', formData.email);
        console.log('📞 Телефон:', formData.phone);
        console.log('💬 Сообщение:', formData.message);
        console.log('=====================');
        console.log('🕒 Время отправки:', new Date().toLocaleString());
    });
});