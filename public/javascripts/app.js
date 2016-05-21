define(function() {
    function isLegeal(jqInput){
        var value = $('#username').text().trim();
        if (!value) {
            alert(jqInput.name + ' 不能为空');
            jqInput.focus();
            return false;
        }
        return true;
    }

    function toLogin() {
        if (isLegeal($('username')) && isLegeal($('password'))) $.ajax({
            url: '/login',
            type: 'post',
            dataType: 'json',
            data: {
                'username': username,
                'password': password
            },
            error: function(){

            },
            timeout: function(){

            },
            success: function(response){

            }
        });
    }

    function toRegister() {

    }

    function init() {
        $(document).on('keydown', function(e) {
            if (e.keycode === 13) toLogin();
        });
        $('#login').on('click', function(event) {
            toLogin();
        });
        $('#register').on('click', function(event) {
            toRegister();
        });
    }
    return {
        init: init
    };
});