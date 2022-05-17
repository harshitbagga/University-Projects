$(document).ready(function () {
	
    $("#catid").select2({
		placeholder: 'Select Category',
        ajax: {
            url: BASE_URL + "index.php/settings/get_category_list",
            dataType: 'json',
            type: "POST",
            quietMillis: 50,
            data: function (term) {
				return {
                    term: term
                };
            },
            results: function (data) {
                return {
                    results: data.categorydata
                };
            }
        }
    });
	$('#startdate').datepick({dateFormat: 'dd-mm-yyyy'});
	$('#enddate').datepick({dateFormat: 'dd-mm-yyyy'});
});