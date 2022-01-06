module.exports = function toReadable (number) {
    

        var str = '';
        var triad = '';
        var str_end = '';
        str_name = [' thousand ', ' million ', ' billion ']
        num = Array.from(String(number), Number);
        var triad_number = Math.floor(num.length / 3);
    
        var n = 0;
        var last_index = -1;
        if (num.length > 3) {
    
            for (var t = 0; t < triad_number * 3; t += 3) {
    
                triad = '';
                var str_pr = '';
                last_index = -1;
                for (var j = 2; j >= 0; j--) {
                    triad += num[num.length - 1 - (j + t)].toString();
                    last_index = num.length - 1 - (j + t) - 3;
    
                }
                if (last_index != -1) {
                    str_pr += str_name[n];
                    n++;
                } else {
                    str_pr = '';
                }
                str = str_pr + f3(triad) + str;
    
            }
            if (last_index >= 0) {
    
                while (last_index != -1) {
                    str_end += num[last_index].toString();
                    last_index--;
                }
            }
            str = f3(str_end.split("").reverse().join("")) + str;
        } else {
    
            str = f3(number.toString());
        }
        return str;
    }
    
    function f1(n) {
    
        n = n.toString();
        switch (n) {
            case '1':
                return 'one';
            case '2':
                return 'two';
            case '3':
                return 'three';
            case '4':
                return 'four';
            case '5':
                return 'five';
            case '6':
                return 'six';
            case '7':
                return 'seven';
            case '8':
                return 'eight';
            case '9':
                return 'nine';
            case '0':
                return '';
        }
    }
    
    function f2(n) {
    
    
        if (n[1] == 0) {
            if (typeof n != 'string') {
    
                n = n.join('');
            }
            switch (n) {
                case '00':
                    return '';
                case '10':
                    return 'ten';
                case '20':
                    return 'twenty';
                case '30':
                    return 'thirty';
                case '40':
                    return 'forty';
                case '50':
                    return 'fifty';
                case '60':
                    return 'sixty';
                case '70':
                    return 'seventy';
                case '80':
                    return 'eighty';
                case '90':
                    return 'ninety';
    
            }
        } else if (n[0] == 1) {
    
            if (typeof n != 'string') {
    
                n = n.join('');
            }
    
            switch (n) {
    
                case '11':
                    return 'eleven';
                case '12':
                    return 'twelve';
                case '13':
                    return 'thirteen';
                case '14':
                    return 'fourteen';
                case '15':
                    return 'fifteen';
                case '16':
                    return 'sixteen';
                case '17':
                    return 'seventeen';
                case '18':
                    return 'eighteen';
                case '19':
                    return 'nineteen';
    
            }
    
        } else {
    
            var param = (n[0].toString() + '0');
            var f1_rez = f1(n[1]);
            var str = f2(param) + ' ' + f1_rez;
            return str;
    
        }
    }
    
    function f3(num) {
        num = Number(num);
        if (num==0) {
            return 'zero';
        }
        num = Array.from(String(num), Number);
    
    
        if (num.length == 1) {
            str = f1(num);
    
        }
        if (num.length == 2) {
    
            str = f2(num);
        }
        if (num.length == 3) {
            str = f1(num[0]) + ' hundred ' + (f2(num[1].toString() + '' + num[2].toString())).trim();
    
        }
    
        return str.trim();
    
    
  
}
