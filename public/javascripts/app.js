define(function() {
    function init($) {
        function isLegeal(jqInput) {
            var value = jqInput.val().trim();
            if (!value) {
                alert(jqInput.name + ' 不能为空');
                jqInput.focus();
                return false;
            }
            return value;
        }

        function toLogin() {
            var username = isLegeal($('#username')),
                password = isLegeal($('#password'));
            if (username && password) $.ajax({
                url: '/login',
                type: 'post',
                dataType: 'json',
                data: {
                    'username': username,
                    'password': password
                },
                error: function() {

                },
                timeout: function() {

                },
                success: function(data) {
                    console.log(data);
                }
            });
        }

        function toRegister() {

        }
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