$("#input").change(function () {
    var salt = $("#salt").val();
    var minhash = parseInt($("#minhash").val());
    var hashids = new Hashids(salt, minhash, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");


    var data = $("#input").val();
    var id = hashids.encode(parseInt(data));
    var numbers = hashids.decode(id);
    console.log(data);
    console.log(", " + id);

    $("#input").text("[" + numbers.join(", ") + "]");
    if (id === "") {
        $("#output").text("enter a value...");
    } else {
        $("#output").text(id);
    }
});
