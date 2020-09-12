$(function () {
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#link_login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })
    // 从layui中获取对象
    var form = layui.form
    //通过form.verify()函数自定义校验规则
    form.verify({
        //自定义一个pwd校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
        //检测两次密码是否一致
        repwd: function (value) {
            //通过形参拿到确认密码框中的内容(pwd)
            //需要拿到密码框中的内容
            //判断是否相等
            //如果失败return一个提示信息
            var pwd = $('.reg-box [name=password]').val()
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        }
    });
    $('#form_reg').on('submit', function (e) {
        e.preventDefault();
        $.post('http://ajax.frontend.itheima.net/api/reguser', {
            username: $('#form_reg [name = uesrname]').val(), password: $('#form_reg [name = password]').val()
        }, function (res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
                }
                console.log('注册成功');
        })
    })
})