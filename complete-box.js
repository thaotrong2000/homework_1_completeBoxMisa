$(document).ready(function () {
    // Kiểm tra xem dữ liệu có trống không
    // 3) Giới tính:
    
    $("#value-gender").keyup(function () { 
        if($(this).val() == ""){
            $(this).closest("div").css("border", "1px solid red");
        }
        else{
            $(this).closest("div").css("border", "1px solid #ccc");
        }
    });
    // 2-b) Check Blur: 
    $("#value-gender").blur(function () { 
        if($(this).val() == ""){
            $(this).closest("div").css("border", "1px solid red");
        }
        else{
            $(this).closest("div").css("border", "1px solid #ccc");
        }
        
    });

    // Lọc dữ liệu theo tên nhập vào 
    $("#input-gender input").keyup(function () {

        $("#gender-select").css("display", "block");

        if ($("#input-gender input").val() == "") {
            $("#gender-select").css("display", "none");

            // Hiển thị border màu đỏ để cảnh báo cho người dùng
            $("#input-gender").css("border-color", "red");

        }
        else {

            // $("#input-gender").css("border-color", "#ccc");
            var filter;
            filter = $("#value-gender").val().toUpperCase();
            var number_gender = $("#gender-select div");

            var txtValue, i;

            for (i = 0; i < number_gender.length; i++) {
                txtValue = number_gender[i].textContent || number_gender[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    number_gender[i].style.display = "block";
                } else {
                    number_gender[i].style.display = "none";
                }
            }


            // Kiểm tra xem có giá trị nào hợp lệ không?
            // Nếu không có thì chuyển border thành đỏ
            var count_check_gender = 0;
            var gender_select = $("#gender-select div");

            for (var i = 0; i < gender_select.length; i++) {
                var display_gender = gender_select[i];
                if (display_gender.style.display == "block") {
                    count_check_gender++;
                }
            }

            if (count_check_gender == 0) {
                $("#input-gender").css("border-color", "red");
                $("#value-gender").attr("title", "Bạn cần nhập đúng");
            }
            else {
                $("#input-gender").css("border", "2px solid #019160");
                $("#value-gender").css("height", "26px");

            }

            // Binding dữ liệu từ dưới lên ô Input

            $("#gender-select div").on("click", function () {
                var value_of_gender = $(this).text();
                $("#input-gender input").val(value_of_gender);
                $("#gender-select").css("display", "none");

            });
            count_check_gender = 0;
        }

    });

    // Khi click vào biểu tượng, sẽ hiện ra các lựa chọn cho người dùng

    $("#input-gender span").on("click", function () {
        // $("#gender-select").css("display", "block");
        // Xử lý dữ liệu đã được chọn

        
        var selected_data = $("#value-gender").val();

        var index_gender = $("#gender-select div");
        for (var count_gender = 0; count_gender < index_gender.length; count_gender++) {
            index_gender[count_gender].style.backgroundColor = "#ffffff";
            index_gender[count_gender].style.color = "#000000";
        }
        for (var count_gender = 0; count_gender < index_gender.length; count_gender++) {
            var value_gender = index_gender[count_gender].textContent;
            if (selected_data == value_gender) {
                index_gender[count_gender].style.backgroundColor = "#01b075";
                index_gender[count_gender].style.color = "#ffffff";
            }

        }




        // Xử lý dữ liệu 
        $("#gender-select").toggle();
        $("#input-gender").css("border-color", "#019160");
        var number_gender = $("#gender-select div");
        var i;
        for (i = 0; i < number_gender.length; i++) {
            number_gender[i].style.display = "block";
        }
        // Binding dữ liệu từ dưới lên ô Input

        $("#gender-select div").on("click", function () {
            var value_of_gender = $(this).text();
            $("#input-gender input").val(value_of_gender);
            $("#gender-select").css("display", "none");
        });

    });

    // Check dữ liệu bắt buộc phải nhập
    // 1) Mã nhân viên: 
    $("#input-employeeId").keyup(function () { 
        if($(this).val() == ""){
            $(this).css("border", "1px solid red");
        }
        else{
            $(this).css("border", "1px solid #ccc");
        }
    });

    // 1-b) Check Blur: 
    $("#input-employeeId").blur(function () { 
        if($(this).val() == ""){
            $(this).css("border", "1px solid red");
        }
        else{
            $(this).css("border", "1px solid #ccc");
        }
        
    });
    
    // 2) Tên nhân viên
    $("#input-employeeName").keyup(function () { 
        if($(this).val() == ""){
            $(this).css("border", "1px solid red");
        }
        else{
            $(this).css("border", "1px solid #ccc");
        }
    });
    // 2-b) Check Blur: 
    $("#input-employeeName").blur(function () { 
        if($(this).val() == ""){
            $(this).css("border", "1px solid red");
        }
        else{
            $(this).css("border", "1px solid #ccc");
        }
        
    });

    

})