function updateClock(){
    var now = new Date();
    var dname = now.getDay();
        mo = now.getMonth();
        dnum = now.getDate();
        yr = now.getFullYear();
        hou = now.getHours();
        min = now.getMinutes();
        sec = now.getSeconds();
        pe = 'AM';

        if(hou == 0){
            hou = 12;
        }

        if(hou > 12){
            hou = hou - 12;
            pe = "PM"
        }

        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }

        var months = ["Janaury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuesday", "Friday"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        var values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}



function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1)
}