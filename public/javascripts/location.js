define(['geo'], function (geo) {
    function init($, id) {
        var $select1 = $('<select>'),
            $select2 = $('<select>'),
            $select3 = $('<select>');
        $(id).append($select1);
        $(id).append($select2);
        $(id).append($select3);
        if (geo.length > 1) geo.map((one) => {
            $select1.append($('<option>').text(one.name));
        });
        oneInit(0);
        $select1.change(function () {
            oneInit($select1.get(0).selectedIndex);
        });

        function oneInit(oneIndex) {
            $select2.empty();
            if (geo[oneIndex].sub.length > 0) geo[oneIndex].sub.map((two) => {
                $select2.append($('<option>').text(two.name));
            });
            twoInit(0);
        }

        $select2.change(function () {
            twoInit($select2.get(0).selectedIndex);
        });
        function twoInit(twoIndex) {
            $select3.show();
            $select3.empty();
            if (geo[$select1.get(0).selectedIndex].type === 1 && geo[$select1.get(0).selectedIndex].sub[twoIndex].sub.length > 0) {
                geo[$select1.get(0).selectedIndex].sub[twoIndex].sub.map((three) => {
                    $select3.append($('<option>').text(three.name));
                });
            } else {
                $select3.hide();
            }
        }
    }
    return {
        init: init
    };
});
