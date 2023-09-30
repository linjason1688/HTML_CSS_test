function run() {
    //document.body.innerHTML.style.margin = 0;
    //document.body.innerHTML.style.padding = 0;
    document.getElementById("paragraph").style.backgroundColor = "yellow";
    document.getElementById("paragraph").style.fontFamily = "標楷體";
    document.getElementById("newBtn").value = "原始按鈕";
    //document.body.style.fontFamily = "標楷體";
    document.write(document.body.innerHTML+
        "<form> <input value='新的按鈕(返回按鈕)' type='submit'> </form>");
}