$(document).ready(function () {
    // Kiểm tra xem dữ liệu có trống không

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
            console.log(count_check_gender);

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
        $("#gender-select").css("display", "block");
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

})