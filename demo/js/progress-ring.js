;
(function ($) {
    $.fn.loadingRing = function () {
        var defaultOpt = {
            trackColor: '#fff',
            progressColor: '#6ec84e',
            precent: 75,
            duration: 2
        }; // 默认选项
        $(this).each(function () {
            var $target = $(this);
            var color = $target.data('color'); // 颜色
            var precent = parseInt($target.data('precent'), 10); // 百分比
            var duration = parseFloat($target.data('duration'), 10) * 1000; // 持续时间
            var trackColor, progressColor;
                trackColor = defaultOpt.trackColor;
                progressColor = defaultOpt.progressColor;
            if (!precent)
                precent = defaultOpt.precent;
            if (!duration)
                duration = defaultOpt.duration;
        

            var x = $target.find('.progress-cover').height(); // 触发 Layout
            // http://stackoverflow.com/questions/12088819/css-transitions-on-new-elements

            $target.find('.progress-left').css('border-color', progressColor);
            $target.find(' .progress-right').css('border-color', progressColor);
            if(precent<=50){
                $target.find('.progress-left').css({
                    'transform': 'rotate(' + precent * 3.6 + 'deg)',
                    '-o-transform': 'rotate(' + precent * 3.6 + 'deg)',
                    '-ms-transform': 'rotate(' + precent * 3.6 + 'deg)',
                    '-moz-transform': 'rotate(' + precent * 3.6 + 'deg)',
                    '-webkit-transform': 'rotate(' + precent * 3.6 + 'deg)',
                    'transition': 'transform ' + duration + 's linear',
                    '-o-transition': '-o-transform ' + duration + 's linear',
                    '-ms-transition': '-ms-transform ' + duration + 's linear',
                    '-moz-transition': '-moz-transform ' + duration + 's linear',
                    '-webkit-transition': '-webkit-transform ' + duration + 's linear'
                });
            }

            else if (precent > 50) {
                var first_duration = (duration * 50 / precent);
                var second_duration = duration - (duration * 50 / precent);
                $target.find('.progress-left').css({
                    'transform': 'rotate(180deg)',
                    '-o-transform': 'rotate(180deg)',
                    '-ms-transform': 'rotate(180deg)',
                    '-moz-transform': 'rotate(180deg)',
                    '-webkit-transform': 'rotate(180deg)',
                    'transition': 'transform ' + first_duration + 's linear',
                    '-o-transition': '-o-transform ' + first_duration + 's linear',
                    '-ms-transition': '-ms-transform ' + first_duration + 's linear',
                    '-moz-transition': '-moz-transform ' + first_duration + 's linear',
                    '-webkit-transition': '-webkit-transform ' + first_duration + 's linear'
                });
                setTimeout(function(){
                    $target.find('.progress-right').css({
                        'opacity': '1',
                        'transform': 'rotate(' + precent * 3.6 + 'deg)',
                        '-o-transform': 'rotate(' + precent * 3.6 + 'deg)',
                        '-ms-transform': 'rotate(' + precent * 3.6 + 'deg)',
                        '-moz-transform': 'rotate(' + precent * 3.6 + 'deg)',
                        '-webkit-transform': 'rotate(' + precent * 3.6 + 'deg)',
                        'transition': 'transform ' + second_duration + 's linear',
                        '-o-transition': '-o-transform ' + second_duration + 's linear',
                        '-ms-transition': '-ms-transform ' + second_duration + 's linear',
                        '-moz-transition': '-moz-transform ' + second_duration + 's linear',
                        '-webkit-transition': '-webkit-transform ' + second_duration + 's linear'
                    });
                },first_duration*1000)
                // $target.find('.progress-cover').css({
                //     'opacity': 0,
                //     'animation': animation,
                //     'animation-timing-function': 'step-start'
                // });
            }
        });
    };
})(jQuery);