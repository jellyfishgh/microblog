define(function() {
    function isMobile() {
        var ua = window.navigator.userAgent,
            re = /Android|iPhone|iPad|iPod/ig;
        return re.test(ua);
    }
    return {
        isMobile: isMobile
    };
});
