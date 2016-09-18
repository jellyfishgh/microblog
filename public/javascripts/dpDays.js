define(function () {
    function DpDays($, calendar, $dateView) {
        this.$ = $;
        this.calendar = calendar;
        this.$dateView = $dateView;
        this.init();
    }
    DpDays.prototype.init = function () {
        var $ = this.$, calendar = this.calendar, $dateView = this.$dateView;
        var month = calendar.dayDate();
        month.map((line) => {
            var $lineView = $('<div>');
            line.map((d) => {
                if (d) $lineView.append($('<span>').text(d));
                else $lineView.append($('<span>').text(''));
            });
            $dateView.append($lineView);
        });
    };
    DpDays.prototype.update = function(){
        this.$dateView.html('');
        this.init();
    };
    return DpDays;
});