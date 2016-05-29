define(function() {
    function isMobile() {
        var ua = window.navigator.userAgent,
            re = /Android|iPhone|iPad|iPod/ig;
        return re.test(ua);
    }
    function formatDate(date){
        var month = date.getMonth();
        month = month < 10 ? '0' + (month + 1) : month;
        return date.getFullYear() + month + date.getDate();
    }
    return {
        isMobile: isMobile
    };
});
