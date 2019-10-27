$(function () {
    $("#btn").click(function () {
        if (5 == $(":radio:checked").length) {
            var a = [];
            a.push($("#topic1 input:radio:checked").val());
            a.push($("#topic2 input:radio:checked").val());
            a.push($("#topic3 input:radio:checked").val());
            a.push($("#topic4 input:radio:checked").val());
            a.push($("#topic5 input:radio:checked").val());
            for (var e = 0, f = 0, g = 0, h = 0, k = 0, l = 0, m = 0, n = 0, d = 0, c = [], b = 0; b <
                a.length; b++) "A" === a[b] && (e++, c.push({
                name: "A",
                value: +e
            })), "B" === a[b] && (f++, c.push({
                name: "B",
                value: +f
            })), "C" === a[b] && (g++, c.push({
                name: "C",
                value: +g
            })), "D" === a[b] && (h++, c.push({
                name: "D",
                value: +h
            })), "E" === a[b] && (k++, c.push({
                name: "E",
                value: +k
            })), "F" === a[b] && (l++, c.push({
                name: "F",
                value: +l
            })), "G" === a[b] && (m++, c.push({
                name: "G",
                value: +m
            })), "H" === a[b] && (n++, c.push({
                name: "H",
                value: +n
            })), "I" === a[b] && (d++, c.push({
                name: "I",
                value: +d
            }));
            console.log(c);
            a = [];
            for (b = 0; b < c.length; b++) 1 == c[b].value && a.push(c[b].value);
            5 === a.length ? mui.alert("小朋友的体质为气虚", "体质辨识") : e >= f && e >= g && e >= h && e >= k && e >=
                l && e >= m && e >= n &&
                e >= d ? mui.alert("小朋友的体质为气虚") : f >= g && f >= h && f >= k && f >= l && f >= m && f >=
                n && f >= d ? mui.alert("小朋友的体质为阳虚", "体质辨识") : g >= h && g >= k && g >= l && g >= m && g >=
                n && g >= d ? mui.alert("小朋友的体质为阴虚", "体质辨识") : h >= k && h >= l && h >= m && h >= n && h >=
                d ? mui.alert("小朋友的体质为痰湿", "体质辨识") : k >= l && k >= m && k >= n && k >= d ? mui.alert(
                    "小朋友的体质为特禀", "体质辨识") :
                l > m && l > n && l > d ? mui.alert("小朋友的体质为平和", "体质辨识") : m >= n && m >= d ? mui.alert(
                    "小朋友的体质为血淤", "体质辨识") : n >= d ? mui.alert("小朋友的体质为湿热", "体质辨识") : d >= d ? mui.alert(
                    "小朋友的体质为气郁", "体质辨识") : mui.alert("小朋友的体质为气虚", "体质辨识")
        } else mui.alert("有题目未做完")
    })
});