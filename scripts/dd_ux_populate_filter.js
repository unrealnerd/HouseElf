function dd_ux_populate_filter() {
    // document.querySelector("#mat-input-0").setAttribute("value",new Date("01/22/2019").toLocaleDateString("en-US"));
    // document.querySelector("#mat-input-0").dispatchEvent(new Event('change'));

    // var e = new KeyboardEvent("keydown", { bubbles: true, cancelable: true, keyCode: 9 });
    // document.querySelector("#mat-input-0").dispatchEvent(e);    
    $('#mat-input-0')[0].click();
    // document.querySelector("#mat-input-0").focus();
    $("#mat-input-0").val("1/1/2019")
    $("#mat-input-0")[0].dispatchEvent(new Event("input", { bubbles: true }));
    // $("#mat-input-0").trigger('change');
    // $('#mat-input-1')[0].click();
    // $("#mat-input-0").trigger(jQuery.Event( 'keydown', { keyCode: 65 } ));
    // $("#mat-input-0").trigger(jQuery.Event( 'keydown', { keyCode: 9 } ));
    // $("#mat-input-0").val("2/22/2019").trigger("input");

    // $('#mat-input-0').trigger(jQuery.Event("keydown", { keyCode: 64 }));

    // $('#mat-input-0').val("2/22/2019");
    // $('#mat-input-0').blur();
    // $('#mat-input-0').next().focus();
    // var e = new KeyboardEvent("keydown", { bubbles: false, cancelable: true, keyCode: 9 });
    // document.querySelector("#mat-input-0").dispatchEvent(new Event('change'));
    // document.querySelector("#mat-input-0").dispatchEvent(e);
    // $("#mat-input-0").trigger(jQuery.Event( 'keydown', { keyCode: 9, which: 9 } ));
    // $('#mat-input-0').next().focus();
    // $('#mat-input-0').change();

    // // $('#mat-input-0').val("1/22/2019").next().focus();
    // // $('#mat-input-0').trigger('blur');
    $('#btnViewResult').click();
}
