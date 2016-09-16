define(function() {
    function init($) {
        function isLegeal(jqInput) {
            var value = jqInput.val().trim();
            if (!value) {
                alert(jqInput.attr('name') + ' 不能为空');
                jqInput.focus();
                return false;
            }
            return value;
        }

        function toLogin() {
            var username, password;
            username = isLegeal($('#username'));
            if (username) password = isLegeal($('#password'));
            if (username && password) $.ajax({
                url: '/login',
                type: 'post',
                dataType: 'text',
                data: {
                    'username': username,
                    'password': password
                },
                error: function() {

                },
                timeout: function() {

                },
                success: function(data) {
                    switch (data) {
                        case '0':
                            location.href = '/';
                            break;
                        case '1':
                            alert('帐号不存在,请注册后使用');
                            break;
                        case '2':
                            alert('帐号或密码不正确');
                    }
                }
            });
        }

        function toRegister() {
            $('#loginDiv').hide(500);
            $('#registerDiv').show(500);
        }

        function toFinish() {
            var username, pwd1, pwd2;
            username = isLegeal($('#regusername'));
            if (username) pwd1 = isLegeal($('#regpassword1'));
            if (pwd1) pwd2 = isLegeal($('#regpassword2'));
            if (pwd1 !== pwd2) {
                alert('两次输入的密码不一致');
                return false;
            }
            if (username && pwd1) $.ajax({
                url: '/register',
                type: 'post',
                dataType: 'text',
                data: {
                    'username': username,
                    'password': pwd1
                },
                error: function() {

                },
                timeout: function() {

                },
                success: function(data) {
                    switch (data) {
                        case '0':
                            alert('注册成功');
                            $('#registerDiv').hide(500);
                            $('#loginDiv').show(500);
                            break;
                        case '1':
                            alert('帐号已存在，请重新输入帐号');
                            $('regusername').focus();
                    }
                }
            });
        }

        $('#login').on('click', function(event) {
            toLogin();
        });
        $('#register').on('click', function(event) {
            toRegister();
        });
        $('#finish').on('click', function(event) {
            toFinish();
        });
        $(document).on('keydown', function(event) {

        });
    }
    return {
        init: init
    };
});
