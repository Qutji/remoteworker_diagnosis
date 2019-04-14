var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ["セルフコントロール", "コミュニケーション", "業務遂行", "ITリテラシ", "健康管理", "時間管理", "タスク管理"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
      data: [12, 19, 3, 17, 28, 24, 7]
    }]
  }
});
