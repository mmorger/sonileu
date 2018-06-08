// Nice try. Of course we don't expose our pricing formula.
var config = {
    packages: {
        20: 10, // Starter
        21: 20, // Pro
        22: 40  // Enterprise
    },
    addons: {
        44: 1, // SMS
        45: 5, // Work Quotas
        46: 5, // Proposals
        47: 4  // Pools
    },
    payment: {
        1: 0.94, // Quaterly
        2: 0.91, // Semestral
        3: 0.88  // Yearly
    },
    currency: {
        chf: 1,
        eur: 0.7
    },
    assignments: {
        2500: 250,
        5000: 488,
        7500: 713,
        10000: 940
    },
    users: {
        1: {25: 13, 50: 15, 100: 19, 200: 26, 300: 34, 400: 45, 500: 57},
        3: {25: 38, 50: 46, 100: 57, 200: 77, 300: 103, 400: 134, 500: 172},
        5: {25: 64, 50: 77, 100: 96, 200: 128, 300: 172, 400: 223, 500: 287},
        10: {25: 128, 50: 153, 100: 191, 200: 255, 300: 344, 400: 446, 500: 574},
        15: {25: 191, 50: 230, 100: 287, 200: 383, 300: 516, 400: 669, 500: 861}
    }
};

(function($) {
    var isChf = true;

    //Radio buttons + Title pack
    var title = $('.right-block .title-packet'),
        radio_btns = $('[name="packet"]'),
        //Packet + modules
        modules = $('.packet-modules .modules-list .module-item'),
        starter = 'packet_20',
        professional = 'packet_21',
        enterprise = 'packet_22';

    function calculate(isChf) {
        var package = parseInt($('.packet-list input:checked').attr('tid'));
        package = config.packages[package];

        var numberUsers = parseInt($('#active-users').val());

        var addons = 0;
        $('input[name="addons"]:checked').each(function() {
            var addon = parseInt($(this).attr('id').replace('packet_addon_', ''));
            addons += config.addons[addon];
        });

        var assignment = parseInt($('#planned-hours').val());
        assignment = config.assignments[assignment];

        var employees = parseInt($('#employees').val());
        var user = config.users[numberUsers][employees];

        var payment = $('input[name="terms"]:checked').parent().index() + 1;
        payment = config.payment[payment];

        var pricePackage = package * numberUsers;
        var priceAddons = addons * numberUsers;
        var priceAssignments = assignment;
        var priceUsers = user;
        var subtotal = pricePackage + priceAddons + priceAssignments + priceUsers;

        var total =  subtotal * payment * ((isChf) ? config.currency.chf : config.currency.eur);

        return total;
    }

    function display(price) {
        var price = Math.floor(price).toLocaleString();
        $('.total-cost b').html(price);
    }

    function updatePrice() {
        try {
            display(calculate(isChf));
        }
        catch (error) {
            $('.total-cost b').html('ERROR');
            console.log(error);
        }
    }

    $(window).ready(function(){
        var tid = "";

        radio_btns.each(function(){
            if ($(this).is(':checked')) {
                tid = $(this).attr('tid');
                checkingModules($(this).attr('modules_tids[]'));
                return false;
            }
        });

        radio_btns.change(function(){
            radio_btns.each(function(){
                if ($(this).is(':checked')) {
                    tid = $(this).attr('tid');
                    checkingModules($(this).attr('modules_tids[]'));
                    return false;
                }
            });
            title.hide();
            $('.packet-description').hide();
            $('.right-block').find('.title-packet[tid='+ tid +']').show();
            $('.packet-description[tid='+ tid +']').show();
            updatePrice();
        });

        $('.term-item, .addon-item').click(updatePrice);
        $('#employees, #planned-hours, #active-users').change(updatePrice);

        function checkingModules(selected_packet){
            modules.each(function(){
                if(selected_packet.includes($(this).attr('module_tid'))) {
                    $(this).addClass('checked')
                }
                else {
                    $(this).removeClass('checked')
                }
            });
        }
    });

    $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
        isChf = (data.country_code === 'CH');
        $('.currency').html(isChf ? 'CHF' : 'EUR');
        updatePrice();
    });

})(jQuery);