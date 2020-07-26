
(function($) {

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title:{
        text: "Electricity Bill"
      },
      axisY: {
        title: "Amount(SGD)"
      },
      data: [{        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        legendText: "Highest Amount",
        dataPoints: [      
          { y: 300878, label: "Jan" },
          { y: 266455,  label: "Feb" },
          { y: 169709,  label: "Mar" },
          { y: 158400,  label: "Apr" },
          { y: 142503,  label: "May" },
          { y: 101500, label: "Jun" },
          { y: 97800,  label: "Jul" },
          { y: 80000,  label: "Aug" },
          { y: 80000,  label: "Sep" },
          { y: 80000,  label: "Oct" },
          { y: 80000,  label: "Nov" },
          { y: 80000,  label: "Dec" }
        ]
      }]
    });
    chart.render();
    
    });