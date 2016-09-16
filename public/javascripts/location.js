define(['geo'], function(geo) {
    function init($, id) {
        var $select1 = $('<select>'),
            $select2 = $('<select>'),
            $select3 = $('<select>');
        $(id).append($select1);
        $(id).append($select2);
        if(geo.length > 1)geo.map((one) => {
            select1.append($('<option>').text(one.name));
        });
        if(geo[0].sub.length > 0)geo[0].sub.map((two) => {
            select2.append($('<option>').text(two.name));
        });
        if(geo[0].type === 1 && geo[0].sub[0].sub.length > 0){
            geo[0].sub[0].sub.map((three) => {
                select3.append($('<option>').text(three.name));
            });
            $(id).append($select3);
        }
    }
    return {
        init: init
    };
});
